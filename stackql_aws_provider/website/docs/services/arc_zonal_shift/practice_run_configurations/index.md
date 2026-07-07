--- 
title: practice_run_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - practice_run_configurations
  - arc_zonal_shift
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

Creates, updates, deletes, gets or lists a <code>practice_run_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="practice_run_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.arc_zonal_shift.practice_run_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_practice_run_configuration"><CopyableCode code="create_practice_run_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceIdentifier"><code>resourceIdentifier</code></a>, <a href="#parameter-outcomeAlarms"><code>outcomeAlarms</code></a></td>
    <td></td>
    <td>A practice run configuration for zonal autoshift is required when you enable zonal autoshift. A practice run configuration includes specifications for blocked dates and blocked time windows, and for Amazon CloudWatch alarms that you create to use with practice runs. The alarms that you specify are an outcome alarm, to monitor application health during practice runs and, optionally, a blocking alarm, to block practice runs from starting. When a resource has a practice run configuration, ARC starts zonal shifts for the resource weekly, to shift traffic for practice runs. Practice runs help you to ensure that shifting away traffic from an Availability Zone during an autoshift is safe for your application. For more information, see Considerations when you configure zonal autoshift in the Amazon Application Recovery Controller Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_practice_run_configuration"><CopyableCode code="update_practice_run_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_identifier"><code>resource_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update a practice run configuration to change one or more of the following: add, change, or remove the blocking alarm; change the outcome alarm; or add, change, or remove blocking dates or time windows.</td>
</tr>
<tr>
    <td><a href="#delete_practice_run_configuration"><CopyableCode code="delete_practice_run_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-resource_identifier"><code>resource_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the practice run configuration for a resource. Before you can delete a practice run configuration for a resource., you must disable zonal autoshift for the resource. Practice runs must be configured for zonal autoshift to be enabled.</td>
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
<tr id="parameter-resource_identifier">
    <td><CopyableCode code="resource_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the resource that you want to delete the practice run configuration for. The identifier is the Amazon Resource Name (ARN) for the resource.</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_practice_run_configuration"
    values={[
        { label: 'create_practice_run_configuration', value: 'create_practice_run_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_practice_run_configuration">

A practice run configuration for zonal autoshift is required when you enable zonal autoshift. A practice run configuration includes specifications for blocked dates and blocked time windows, and for Amazon CloudWatch alarms that you create to use with practice runs. The alarms that you specify are an outcome alarm, to monitor application health during practice runs and, optionally, a blocking alarm, to block practice runs from starting. When a resource has a practice run configuration, ARC starts zonal shifts for the resource weekly, to shift traffic for practice runs. Practice runs help you to ensure that shifting away traffic from an Availability Zone during an autoshift is safe for your application. For more information, see Considerations when you configure zonal autoshift in the Amazon Application Recovery Controller Developer Guide.

```sql
INSERT INTO aws.arc_zonal_shift.practice_run_configurations (
resourceIdentifier,
blockedWindows,
blockedDates,
blockingAlarms,
allowedWindows,
outcomeAlarms,
region
)
SELECT 
'{{ resourceIdentifier }}' /* required */,
'{{ blockedWindows }}',
'{{ blockedDates }}',
'{{ blockingAlarms }}',
'{{ allowedWindows }}',
'{{ outcomeAlarms }}' /* required */,
'{{ region }}'
RETURNING
name,
arn,
practiceRunConfiguration,
zonalAutoshiftStatus
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: practice_run_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the practice_run_configurations resource.
    - name: resourceIdentifier
      value: "{{ resourceIdentifier }}"
    - name: blockedWindows
      value:
        - "{{ blockedWindows }}"
    - name: blockedDates
      value:
        - "{{ blockedDates }}"
    - name: blockingAlarms
      value:
        - type_: "{{ type_ }}"
          alarmIdentifier: "{{ alarmIdentifier }}"
    - name: allowedWindows
      value:
        - "{{ allowedWindows }}"
    - name: outcomeAlarms
      value:
        - type_: "{{ type_ }}"
          alarmIdentifier: "{{ alarmIdentifier }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_practice_run_configuration"
    values={[
        { label: 'update_practice_run_configuration', value: 'update_practice_run_configuration' }
    ]}
>
<TabItem value="update_practice_run_configuration">

Update a practice run configuration to change one or more of the following: add, change, or remove the blocking alarm; change the outcome alarm; or add, change, or remove blocking dates or time windows.

```sql
UPDATE aws.arc_zonal_shift.practice_run_configurations
SET 
blockedWindows = '{{ blockedWindows }}',
blockedDates = '{{ blockedDates }}',
blockingAlarms = '{{ blockingAlarms }}',
allowedWindows = '{{ allowedWindows }}',
outcomeAlarms = '{{ outcomeAlarms }}'
WHERE 
resource_identifier = '{{ resource_identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
name,
arn,
practiceRunConfiguration,
zonalAutoshiftStatus;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_practice_run_configuration"
    values={[
        { label: 'delete_practice_run_configuration', value: 'delete_practice_run_configuration' }
    ]}
>
<TabItem value="delete_practice_run_configuration">

Deletes the practice run configuration for a resource. Before you can delete a practice run configuration for a resource., you must disable zonal autoshift for the resource. Practice runs must be configured for zonal autoshift to be enabled.

```sql
DELETE FROM aws.arc_zonal_shift.practice_run_configurations
WHERE resource_identifier = '{{ resource_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
