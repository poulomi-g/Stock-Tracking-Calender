import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';

class Header extends React.Component {
  state = { month: this.props.month };

  static getDerivedStateFromProps(nextProps) {
    return {
      month: nextProps.month,
    }
  }

  previous = () => {
    const { month } = this.state;

    this.setState({
      month: month.subtract(1, 'month'),
    });

    this.props.triggerMonthChange(month);
  }

  next = () => {
    const { month } = this.state;

    this.setState({
      month: month.add(1, 'month'),
    });

    this.props.triggerMonthChange(month);
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.monthDisplay}>
          <div className={styles.arrowWrapper} onClick={this.previous}>
            <FontAwesomeIcon className={styles.arrow} icon={faAngleLeft} size="lg" />
          </div>
          <span className={styles.monthLabel}>{this.state.month.format("MMMM YYYY")}</span>
          <div className={styles.arrowWrapper} onClick={this.previous}>
            <FontAwesomeIcon className={styles.arrow} icon={faAngleLeft} size="lg" rotation={180} />
          </div>
        </div>
        <div>
        </div>
      </header>
    )
  }
}

export default Header;
