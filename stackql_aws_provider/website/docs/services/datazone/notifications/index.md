--- 
title: notifications
hide_title: false
hide_table_of_contents: false
keywords:
  - notifications
  - datazone
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

Creates, updates, deletes, gets or lists a <code>notifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notifications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.notifications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_notifications"
    values={[
        { label: 'list_notifications', value: 'list_notifications' }
    ]}
>
<TabItem value="list_notifications">

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
    <td><CopyableCode code="actionLink" /></td>
    <td><code>string</code></td>
    <td>The action link included in the notification.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when a notification was created.</td>
</tr>
<tr>
    <td><CopyableCode code="domainIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of a Amazon DataZone domain in which the notification exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the notification. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the notification was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The message included in the notification.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata included in the notification.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status included in the notification. (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the notification.</td>
</tr>
<tr>
    <td><CopyableCode code="topic" /></td>
    <td><code>object</code></td>
    <td>The topic of the notification.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the notification. (TASK, EVENT)</td>
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
    <td><a href="#list_notifications"><CopyableCode code="list_notifications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-afterTimestamp"><code>afterTimestamp</code></a>, <a href="#parameter-beforeTimestamp"><code>beforeTimestamp</code></a>, <a href="#parameter-subjects"><code>subjects</code></a>, <a href="#parameter-taskStatus"><code>taskStatus</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all Amazon DataZone notifications.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone domain.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of notifications.</td>
</tr>
<tr id="parameter-afterTimestamp">
    <td><CopyableCode code="afterTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time after which you want to list notifications.</td>
</tr>
<tr id="parameter-beforeTimestamp">
    <td><CopyableCode code="beforeTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time before which you want to list notifications.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of notifications to return in a single call to ListNotifications. When the number of notifications to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListNotifications to list the next set of notifications.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of notifications is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of notifications, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListNotifications to list the next set of notifications.</td>
</tr>
<tr id="parameter-subjects">
    <td><CopyableCode code="subjects" /></td>
    <td><code>array</code></td>
    <td>The subjects of notifications.</td>
</tr>
<tr id="parameter-taskStatus">
    <td><CopyableCode code="taskStatus" /></td>
    <td><code>string</code></td>
    <td>The task status of notifications.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_notifications"
    values={[
        { label: 'list_notifications', value: 'list_notifications' }
    ]}
>
<TabItem value="list_notifications">

Lists all Amazon DataZone notifications.

```sql
SELECT
actionLink,
creationTimestamp,
domainIdentifier,
identifier,
lastUpdatedTimestamp,
message,
metadata,
status,
title_,
topic,
type_
FROM aws.datazone.notifications
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND type = '{{ type }}' -- required
AND region = '{{ region }}' -- required
AND afterTimestamp = '{{ afterTimestamp }}'
AND beforeTimestamp = '{{ beforeTimestamp }}'
AND subjects = '{{ subjects }}'
AND taskStatus = '{{ taskStatus }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
