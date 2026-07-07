--- 
title: scheduled_audits
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduled_audits
  - iot
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

Creates, updates, deletes, gets or lists a <code>scheduled_audits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scheduled_audits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.scheduled_audits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_scheduled_audit"
    values={[
        { label: 'describe_scheduled_audit', value: 'describe_scheduled_audit' },
        { label: 'list_scheduled_audits', value: 'list_scheduled_audits' }
    ]}
>
<TabItem value="describe_scheduled_audit">

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
    <td><CopyableCode code="dayOfMonth" /></td>
    <td><code>string</code></td>
    <td>The day of the month on which the scheduled audit takes place. This is will be 1 through 31 or LAST. If days 29-31 are specified, and the month does not have that many days, the audit takes place on the LAST day of the month. (pattern: &lt;code&gt;^(&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)$|^LAST$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dayOfWeek" /></td>
    <td><code>string</code></td>
    <td>The day of the week on which the scheduled audit takes place, either one of SUN, MON, TUE, WED, THU, FRI, or SAT. (SUN, MON, TUE, WED, THU, FRI, SAT)</td>
</tr>
<tr>
    <td><CopyableCode code="frequency" /></td>
    <td><code>string</code></td>
    <td>How often the scheduled audit takes place, either one of DAILY, WEEKLY, BIWEEKLY, or MONTHLY. The start time of each audit is determined by the system. (DAILY, WEEKLY, BIWEEKLY, MONTHLY)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduledAuditArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the scheduled audit.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduledAuditName" /></td>
    <td><code>string</code></td>
    <td>The name of the scheduled audit. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="targetCheckNames" /></td>
    <td><code>array</code></td>
    <td>Which checks are performed during the scheduled audit. Checks must be enabled for your account. (Use DescribeAccountAuditConfiguration to see the list of all checks, including those that are enabled or use UpdateAccountAuditConfiguration to select which checks are enabled.)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_scheduled_audits">

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
    <td><CopyableCode code="dayOfMonth" /></td>
    <td><code>string</code></td>
    <td>The day of the month on which the scheduled audit is run (if the frequency is "MONTHLY"). If days 29-31 are specified, and the month does not have that many days, the audit takes place on the "LAST" day of the month. (pattern: &lt;code&gt;^(&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)$|^LAST$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dayOfWeek" /></td>
    <td><code>string</code></td>
    <td>The day of the week on which the scheduled audit is run (if the frequency is "WEEKLY" or "BIWEEKLY"). (SUN, MON, TUE, WED, THU, FRI, SAT)</td>
</tr>
<tr>
    <td><CopyableCode code="frequency" /></td>
    <td><code>string</code></td>
    <td>How often the scheduled audit occurs. (DAILY, WEEKLY, BIWEEKLY, MONTHLY)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduledAuditArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the scheduled audit.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduledAuditName" /></td>
    <td><code>string</code></td>
    <td>The name of the scheduled audit. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_scheduled_audit"><CopyableCode code="describe_scheduled_audit" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-scheduled_audit_name"><code>scheduled_audit_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a scheduled audit. Requires permission to access the DescribeScheduledAudit action.</td>
</tr>
<tr>
    <td><a href="#list_scheduled_audits"><CopyableCode code="list_scheduled_audits" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all of your scheduled audits. Requires permission to access the ListScheduledAudits action.</td>
</tr>
<tr>
    <td><a href="#create_scheduled_audit"><CopyableCode code="create_scheduled_audit" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-scheduled_audit_name"><code>scheduled_audit_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-frequency"><code>frequency</code></a>, <a href="#parameter-targetCheckNames"><code>targetCheckNames</code></a></td>
    <td></td>
    <td>Creates a scheduled audit that is run at a specified time interval. Requires permission to access the CreateScheduledAudit action.</td>
</tr>
<tr>
    <td><a href="#update_scheduled_audit"><CopyableCode code="update_scheduled_audit" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-scheduled_audit_name"><code>scheduled_audit_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a scheduled audit, including which checks are performed and how often the audit takes place. Requires permission to access the UpdateScheduledAudit action.</td>
</tr>
<tr>
    <td><a href="#delete_scheduled_audit"><CopyableCode code="delete_scheduled_audit" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-scheduled_audit_name"><code>scheduled_audit_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a scheduled audit. Requires permission to access the DeleteScheduledAudit action.</td>
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
<tr id="parameter-scheduled_audit_name">
    <td><CopyableCode code="scheduled_audit_name" /></td>
    <td><code>string</code></td>
    <td>The name of the scheduled audit you want to delete.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time. The default is 25.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_scheduled_audit"
    values={[
        { label: 'describe_scheduled_audit', value: 'describe_scheduled_audit' },
        { label: 'list_scheduled_audits', value: 'list_scheduled_audits' }
    ]}
>
<TabItem value="describe_scheduled_audit">

Gets information about a scheduled audit. Requires permission to access the DescribeScheduledAudit action.

```sql
SELECT
dayOfMonth,
dayOfWeek,
frequency,
scheduledAuditArn,
scheduledAuditName,
targetCheckNames
FROM aws.iot.scheduled_audits
WHERE scheduled_audit_name = '{{ scheduled_audit_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_scheduled_audits">

Lists all of your scheduled audits. Requires permission to access the ListScheduledAudits action.

```sql
SELECT
dayOfMonth,
dayOfWeek,
frequency,
scheduledAuditArn,
scheduledAuditName
FROM aws.iot.scheduled_audits
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_scheduled_audit"
    values={[
        { label: 'create_scheduled_audit', value: 'create_scheduled_audit' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_scheduled_audit">

Creates a scheduled audit that is run at a specified time interval. Requires permission to access the CreateScheduledAudit action.

```sql
INSERT INTO aws.iot.scheduled_audits (
frequency,
dayOfMonth,
dayOfWeek,
targetCheckNames,
tags,
scheduled_audit_name,
region
)
SELECT 
'{{ frequency }}' /* required */,
'{{ dayOfMonth }}',
'{{ dayOfWeek }}',
'{{ targetCheckNames }}' /* required */,
'{{ tags }}',
'{{ scheduled_audit_name }}',
'{{ region }}'
RETURNING
scheduledAuditArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: scheduled_audits
  props:
    - name: scheduled_audit_name
      value: "{{ scheduled_audit_name }}"
      description: Required parameter for the scheduled_audits resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the scheduled_audits resource.
    - name: frequency
      value: "{{ frequency }}"
      valid_values: ['DAILY', 'WEEKLY', 'BIWEEKLY', 'MONTHLY']
    - name: dayOfMonth
      value: "{{ dayOfMonth }}"
    - name: dayOfWeek
      value: "{{ dayOfWeek }}"
      valid_values: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    - name: targetCheckNames
      value:
        - "{{ targetCheckNames }}"
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_scheduled_audit"
    values={[
        { label: 'update_scheduled_audit', value: 'update_scheduled_audit' }
    ]}
>
<TabItem value="update_scheduled_audit">

Updates a scheduled audit, including which checks are performed and how often the audit takes place. Requires permission to access the UpdateScheduledAudit action.

```sql
UPDATE aws.iot.scheduled_audits
SET 
frequency = '{{ frequency }}',
dayOfMonth = '{{ dayOfMonth }}',
dayOfWeek = '{{ dayOfWeek }}',
targetCheckNames = '{{ targetCheckNames }}'
WHERE 
scheduled_audit_name = '{{ scheduled_audit_name }}' --required
AND region = '{{ region }}' --required
RETURNING
scheduledAuditArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_scheduled_audit"
    values={[
        { label: 'delete_scheduled_audit', value: 'delete_scheduled_audit' }
    ]}
>
<TabItem value="delete_scheduled_audit">

Deletes a scheduled audit. Requires permission to access the DeleteScheduledAudit action.

```sql
DELETE FROM aws.iot.scheduled_audits
WHERE scheduled_audit_name = '{{ scheduled_audit_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
