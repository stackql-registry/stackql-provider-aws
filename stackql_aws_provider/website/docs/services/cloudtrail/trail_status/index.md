--- 
title: trail_status
hide_title: false
hide_table_of_contents: false
keywords:
  - trail_status
  - cloudtrail
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>trail_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trail_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudtrail.trail_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_trail_status"
    values={[
        { label: 'get_trail_status', value: 'get_trail_status' }
    ]}
>
<TabItem value="get_trail_status">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="IsLogging" /></td>
    <td><code>boolean</code></td>
    <td>Whether the CloudTrail trail is currently logging Amazon Web Services API calls.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestCloudWatchLogsDeliveryError" /></td>
    <td><code>string</code></td>
    <td>Displays any CloudWatch Logs error that CloudTrail encountered when attempting to deliver logs to CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestCloudWatchLogsDeliveryTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Displays the most recent date and time when CloudTrail delivered logs to CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestDeliveryAttemptSucceeded" /></td>
    <td><code>string</code></td>
    <td>This field is no longer in use.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestDeliveryAttemptTime" /></td>
    <td><code>string</code></td>
    <td>This field is no longer in use.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestDeliveryError" /></td>
    <td><code>string</code></td>
    <td>Displays any Amazon S3 error that CloudTrail encountered when attempting to deliver log files to the designated bucket. For more information, see Error Responses in the Amazon S3 API Reference. This error occurs only when there is a problem with the destination S3 bucket, and does not occur for requests that time out. To resolve the issue, fix the bucket policy so that CloudTrail can write to the bucket; or create a new bucket and call UpdateTrail to specify the new bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestDeliveryTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Specifies the date and time that CloudTrail last delivered log files to an account's Amazon S3 bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestDigestDeliveryError" /></td>
    <td><code>string</code></td>
    <td>Displays any Amazon S3 error that CloudTrail encountered when attempting to deliver a digest file to the designated bucket. For more information, see Error Responses in the Amazon S3 API Reference. This error occurs only when there is a problem with the destination S3 bucket, and does not occur for requests that time out. To resolve the issue, fix the bucket policy so that CloudTrail can write to the bucket; or create a new bucket and call UpdateTrail to specify the new bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestDigestDeliveryTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Specifies the date and time that CloudTrail last delivered a digest file to an account's Amazon S3 bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestNotificationAttemptSucceeded" /></td>
    <td><code>string</code></td>
    <td>This field is no longer in use.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestNotificationAttemptTime" /></td>
    <td><code>string</code></td>
    <td>This field is no longer in use.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestNotificationError" /></td>
    <td><code>string</code></td>
    <td>Displays any Amazon SNS error that CloudTrail encountered when attempting to send a notification. For more information about Amazon SNS errors, see the Amazon SNS Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestNotificationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Specifies the date and time of the most recent Amazon SNS notification that CloudTrail has written a new log file to an account's Amazon S3 bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="StartLoggingTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Specifies the most recent date and time when CloudTrail started recording API calls for an Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="StopLoggingTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Specifies the most recent date and time when CloudTrail stopped recording API calls for an Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="TimeLoggingStarted" /></td>
    <td><code>string</code></td>
    <td>This field is no longer in use.</td>
</tr>
<tr>
    <td><CopyableCode code="TimeLoggingStopped" /></td>
    <td><code>string</code></td>
    <td>This field is no longer in use.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_trail_status"><CopyableCode code="get_trail_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a JSON-formatted list of information about the specified trail. Fields include information on delivery errors, Amazon SNS and Amazon S3 errors, and start and stop logging times for each trail. This operation returns trail status from a single Region. To return trail status from all Regions, you must call the operation on each Region.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_trail_status"
    values={[
        { label: 'get_trail_status', value: 'get_trail_status' }
    ]}
>
<TabItem value="get_trail_status">

Returns a JSON-formatted list of information about the specified trail. Fields include information on delivery errors, Amazon SNS and Amazon S3 errors, and start and stop logging times for each trail. This operation returns trail status from a single Region. To return trail status from all Regions, you must call the operation on each Region.

```sql
SELECT
IsLogging,
LatestCloudWatchLogsDeliveryError,
LatestCloudWatchLogsDeliveryTime,
LatestDeliveryAttemptSucceeded,
LatestDeliveryAttemptTime,
LatestDeliveryError,
LatestDeliveryTime,
LatestDigestDeliveryError,
LatestDigestDeliveryTime,
LatestNotificationAttemptSucceeded,
LatestNotificationAttemptTime,
LatestNotificationError,
LatestNotificationTime,
StartLoggingTime,
StopLoggingTime,
TimeLoggingStarted,
TimeLoggingStopped
FROM aws.cloudtrail.trail_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
