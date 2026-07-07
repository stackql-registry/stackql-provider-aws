--- 
title: incident_records
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_records
  - ssm_incidents
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

Creates, updates, deletes, gets or lists an <code>incident_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_incidents.incident_records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_incident_record"
    values={[
        { label: 'get_incident_record', value: 'get_incident_record' },
        { label: 'list_incident_records', value: 'list_incident_records' }
    ]}
>
<TabItem value="get_incident_record">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the incident record. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-z0-9-&#93;*:&#91;a-z0-9-&#93;*:(&#91;0-9&#93;&#123;12&#125;)?:.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="automationExecutions" /></td>
    <td><code>array</code></td>
    <td>The runbook, or automation document, that's run at the beginning of the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="chatChannel" /></td>
    <td><code>object</code></td>
    <td>The Chatbot chat channel used for collaboration during an incident.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when Incident Manager created the incident record.</td>
</tr>
<tr>
    <td><CopyableCode code="dedupeString" /></td>
    <td><code>string</code></td>
    <td>The string Incident Manager uses to prevent duplicate incidents from being created by the same incident in the same account.</td>
</tr>
<tr>
    <td><CopyableCode code="impact" /></td>
    <td><code>integer</code></td>
    <td>The impact of the incident on customers and applications. Supported impact codes 1 - Critical 2 - High 3 - Medium 4 - Low 5 - No Impact</td>
</tr>
<tr>
    <td><CopyableCode code="incidentRecordSource" /></td>
    <td><code>object</code></td>
    <td>Details about the action that started the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedBy" /></td>
    <td><code>string</code></td>
    <td>Who modified the incident most recently. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-z0-9-&#93;*:&#91;a-z0-9-&#93;*:(&#91;0-9&#93;&#123;12&#125;)?:.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the incident was most recently modified.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationTargets" /></td>
    <td><code>array</code></td>
    <td>The Amazon SNS targets that are notified when updates are made to an incident.</td>
</tr>
<tr>
    <td><CopyableCode code="resolvedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the incident was resolved. This appears as a timeline event.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the incident. (OPEN, RESOLVED)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>The summary of the incident. The summary is a brief synopsis of what occurred, what's currently happening, and context of the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the incident.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_incident_records">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the incident. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-z0-9-&#93;*:&#91;a-z0-9-&#93;*:(&#91;0-9&#93;&#123;12&#125;)?:.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the incident was created.</td>
</tr>
<tr>
    <td><CopyableCode code="impact" /></td>
    <td><code>integer</code></td>
    <td>Defines the impact to customers and applications.</td>
</tr>
<tr>
    <td><CopyableCode code="incidentRecordSource" /></td>
    <td><code>object</code></td>
    <td>What caused Incident Manager to create the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="resolvedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the incident was resolved.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the incident. (OPEN, RESOLVED)</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the incident. This value is either provided by the response plan or overwritten on creation.</td>
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
    <td><a href="#get_incident_record"><CopyableCode code="get_incident_record" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details for the specified incident record.</td>
</tr>
<tr>
    <td><a href="#list_incident_records"><CopyableCode code="list_incident_records" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all incident records in your account. Use this command to retrieve the Amazon Resource Name (ARN) of the incident record you want to update.</td>
</tr>
<tr>
    <td><a href="#update_incident_record"><CopyableCode code="update_incident_record" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Update the details of an incident record. You can use this operation to update an incident record from the defined chat channel. For more information about using actions in chat channels, see Interacting through chat.</td>
</tr>
<tr>
    <td><a href="#delete_incident_record"><CopyableCode code="delete_incident_record" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an incident record from Incident Manager.</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the incident record.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_incident_record"
    values={[
        { label: 'get_incident_record', value: 'get_incident_record' },
        { label: 'list_incident_records', value: 'list_incident_records' }
    ]}
>
<TabItem value="get_incident_record">

Returns the details for the specified incident record.

```sql
SELECT
arn,
automationExecutions,
chatChannel,
creationTime,
dedupeString,
impact,
incidentRecordSource,
lastModifiedBy,
lastModifiedTime,
notificationTargets,
resolvedTime,
status,
summary,
title_
FROM aws.ssm_incidents.incident_records
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_incident_records">

Lists all incident records in your account. Use this command to retrieve the Amazon Resource Name (ARN) of the incident record you want to update.

```sql
SELECT
arn,
creationTime,
impact,
incidentRecordSource,
resolvedTime,
status,
title_
FROM aws.ssm_incidents.incident_records
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_incident_record"
    values={[
        { label: 'update_incident_record', value: 'update_incident_record' }
    ]}
>
<TabItem value="update_incident_record">

Update the details of an incident record. You can use this operation to update an incident record from the defined chat channel. For more information about using actions in chat channels, see Interacting through chat.

```sql
UPDATE aws.ssm_incidents.incident_records
SET 
arn = '{{ arn }}',
chatChannel = '{{ chatChannel }}',
clientToken = '{{ clientToken }}',
impact = {{ impact }},
notificationTargets = '{{ notificationTargets }}',
status = '{{ status }}',
summary = '{{ summary }}',
title = '{{ title }}'
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_incident_record"
    values={[
        { label: 'delete_incident_record', value: 'delete_incident_record' }
    ]}
>
<TabItem value="delete_incident_record">

Delete an incident record from Incident Manager.

```sql
DELETE FROM aws.ssm_incidents.incident_records
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
