--- 
title: telemetry_evaluations
hide_title: false
hide_table_of_contents: false
keywords:
  - telemetry_evaluations
  - observabilityadmin
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

Creates, updates, deletes, gets or lists a <code>telemetry_evaluations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="telemetry_evaluations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.observabilityadmin.telemetry_evaluations" /></td></tr>
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
    <td><a href="#start_telemetry_evaluation"><CopyableCode code="start_telemetry_evaluation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This action begins onboarding the caller Amazon Web Services account to the telemetry config feature.</td>
</tr>
<tr>
    <td><a href="#start_telemetry_evaluation_for_organization"><CopyableCode code="start_telemetry_evaluation_for_organization" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This actions begins onboarding the organization and all member accounts to the telemetry config feature.</td>
</tr>
<tr>
    <td><a href="#stop_telemetry_evaluation"><CopyableCode code="stop_telemetry_evaluation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This action begins offboarding the caller Amazon Web Services account from the telemetry config feature.</td>
</tr>
<tr>
    <td><a href="#stop_telemetry_evaluation_for_organization"><CopyableCode code="stop_telemetry_evaluation_for_organization" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This action offboards the Organization of the caller Amazon Web Services account from the telemetry config feature.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="start_telemetry_evaluation"
    values={[
        { label: 'start_telemetry_evaluation', value: 'start_telemetry_evaluation' },
        { label: 'start_telemetry_evaluation_for_organization', value: 'start_telemetry_evaluation_for_organization' },
        { label: 'stop_telemetry_evaluation', value: 'stop_telemetry_evaluation' },
        { label: 'stop_telemetry_evaluation_for_organization', value: 'stop_telemetry_evaluation_for_organization' }
    ]}
>
<TabItem value="start_telemetry_evaluation">

This action begins onboarding the caller Amazon Web Services account to the telemetry config feature.

```sql
EXEC aws.observabilityadmin.telemetry_evaluations.start_telemetry_evaluation 
@region='{{ region }}' --required 
@@json=
'{
"Regions": "{{ Regions }}", 
"AllRegions": {{ AllRegions }}
}'
;
```
</TabItem>
<TabItem value="start_telemetry_evaluation_for_organization">

This actions begins onboarding the organization and all member accounts to the telemetry config feature.

```sql
EXEC aws.observabilityadmin.telemetry_evaluations.start_telemetry_evaluation_for_organization 
@region='{{ region }}' --required 
@@json=
'{
"Regions": "{{ Regions }}", 
"AllRegions": {{ AllRegions }}
}'
;
```
</TabItem>
<TabItem value="stop_telemetry_evaluation">

This action begins offboarding the caller Amazon Web Services account from the telemetry config feature.

```sql
EXEC aws.observabilityadmin.telemetry_evaluations.stop_telemetry_evaluation 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_telemetry_evaluation_for_organization">

This action offboards the Organization of the caller Amazon Web Services account from the telemetry config feature.

```sql
EXEC aws.observabilityadmin.telemetry_evaluations.stop_telemetry_evaluation_for_organization 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
