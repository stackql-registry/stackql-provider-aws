--- 
title: events
hide_title: false
hide_table_of_contents: false
keywords:
  - events
  - elasticbeanstalk
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

Creates, updates, deletes, gets or lists an <code>events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticbeanstalk.events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_events"
    values={[
        { label: 'describe_events', value: 'describe_events' }
    ]}
>
<TabItem value="describe_events">

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
    <td><CopyableCode code="application_name" /></td>
    <td><code>string</code></td>
    <td>The application associated with the event.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment associated with this event.</td>
</tr>
<tr>
    <td><CopyableCode code="event_date" /></td>
    <td><code>string</code></td>
    <td>The date when the event occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The event message.</td>
</tr>
<tr>
    <td><CopyableCode code="platform_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the platform version.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The web service request ID for the activity of this event.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The severity level of this event.</td>
</tr>
<tr>
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration associated with this event.</td>
</tr>
<tr>
    <td><CopyableCode code="version_label" /></td>
    <td><code>string</code></td>
    <td>The release label for the application version associated with this event.</td>
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
    <td><a href="#describe_events"><CopyableCode code="describe_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-VersionLabel"><code>VersionLabel</code></a>, <a href="#parameter-TemplateName"><code>TemplateName</code></a>, <a href="#parameter-EnvironmentId"><code>EnvironmentId</code></a>, <a href="#parameter-EnvironmentName"><code>EnvironmentName</code></a>, <a href="#parameter-PlatformArn"><code>PlatformArn</code></a>, <a href="#parameter-RequestId"><code>RequestId</code></a>, <a href="#parameter-Severity"><code>Severity</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns list of event descriptions matching criteria up to the last 6 weeks. This action returns the most recent 1,000 events from the specified NextToken.</td>
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
<tr id="parameter-ApplicationName">
    <td><CopyableCode code="ApplicationName" /></td>
    <td><code>string</code></td>
    <td>If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those associated with this application.</td>
</tr>
<tr id="parameter-EndTime">
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that occur up to, but not including, the EndTime.</td>
</tr>
<tr id="parameter-EnvironmentId">
    <td><CopyableCode code="EnvironmentId" /></td>
    <td><code>string</code></td>
    <td>If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this environment.</td>
</tr>
<tr id="parameter-EnvironmentName">
    <td><CopyableCode code="EnvironmentName" /></td>
    <td><code>string</code></td>
    <td>If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this environment.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>Specifies the maximum number of events that can be returned, beginning with the most recent event.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token. If specified, the events return the next batch of results.</td>
</tr>
<tr id="parameter-PlatformArn">
    <td><CopyableCode code="PlatformArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a custom platform version. If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this custom platform version.</td>
</tr>
<tr id="parameter-RequestId">
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>If specified, AWS Elastic Beanstalk restricts the described events to include only those associated with this request ID.</td>
</tr>
<tr id="parameter-Severity">
    <td><CopyableCode code="Severity" /></td>
    <td><code>string</code></td>
    <td>If specified, limits the events returned from this call to include only those with the specified severity or higher.</td>
</tr>
<tr id="parameter-StartTime">
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that occur on or after this time.</td>
</tr>
<tr id="parameter-TemplateName">
    <td><CopyableCode code="TemplateName" /></td>
    <td><code>string</code></td>
    <td>If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that are associated with this environment configuration.</td>
</tr>
<tr id="parameter-VersionLabel">
    <td><CopyableCode code="VersionLabel" /></td>
    <td><code>string</code></td>
    <td>If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this application version.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_events"
    values={[
        { label: 'describe_events', value: 'describe_events' }
    ]}
>
<TabItem value="describe_events">

Returns list of event descriptions matching criteria up to the last 6 weeks. This action returns the most recent 1,000 events from the specified NextToken.

```sql
SELECT
application_name,
environment_name,
event_date,
message,
platform_arn,
request_id,
severity,
template_name,
version_label
FROM aws.elasticbeanstalk.events
WHERE region = '{{ region }}' -- required
AND ApplicationName = '{{ ApplicationName }}'
AND VersionLabel = '{{ VersionLabel }}'
AND TemplateName = '{{ TemplateName }}'
AND EnvironmentId = '{{ EnvironmentId }}'
AND EnvironmentName = '{{ EnvironmentName }}'
AND PlatformArn = '{{ PlatformArn }}'
AND RequestId = '{{ RequestId }}'
AND Severity = '{{ Severity }}'
AND StartTime = '{{ StartTime }}'
AND EndTime = '{{ EndTime }}'
AND MaxRecords = '{{ MaxRecords }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
