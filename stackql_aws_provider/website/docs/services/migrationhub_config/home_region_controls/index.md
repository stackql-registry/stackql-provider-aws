--- 
title: home_region_controls
hide_title: false
hide_table_of_contents: false
keywords:
  - home_region_controls
  - migrationhub_config
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

Creates, updates, deletes, gets or lists a <code>home_region_controls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="home_region_controls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.migrationhub_config.home_region_controls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_home_region_controls"
    values={[
        { label: 'describe_home_region_controls', value: 'describe_home_region_controls' }
    ]}
>
<TabItem value="describe_home_region_controls">

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
    <td><CopyableCode code="HomeRegionControls" /></td>
    <td><code>array</code></td>
    <td>An array that contains your HomeRegionControl objects.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If a NextToken was returned by a previous call, more results are available. To retrieve the next page of results, make the call again using the returned token in NextToken. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\/\+\=&#93;&#123;0,2048&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_home_region_controls"><CopyableCode code="describe_home_region_controls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API permits filtering on the ControlId and HomeRegion fields.</td>
</tr>
<tr>
    <td><a href="#create_home_region_control"><CopyableCode code="create_home_region_control" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HomeRegion"><code>HomeRegion</code></a>, <a href="#parameter-Target"><code>Target</code></a></td>
    <td></td>
    <td>This API sets up the home region for the calling account only.</td>
</tr>
<tr>
    <td><a href="#delete_home_region_control"><CopyableCode code="delete_home_region_control" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation deletes the home region configuration for the calling account. The operation does not delete discovery or migration tracking data in the home region.</td>
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
    defaultValue="describe_home_region_controls"
    values={[
        { label: 'describe_home_region_controls', value: 'describe_home_region_controls' }
    ]}
>
<TabItem value="describe_home_region_controls">

This API permits filtering on the ControlId and HomeRegion fields.

```sql
SELECT
HomeRegionControls,
NextToken
FROM aws.migrationhub_config.home_region_controls
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_home_region_control"
    values={[
        { label: 'create_home_region_control', value: 'create_home_region_control' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_home_region_control">

This API sets up the home region for the calling account only.

```sql
INSERT INTO aws.migrationhub_config.home_region_controls (
HomeRegion,
Target,
DryRun,
region
)
SELECT 
'{{ HomeRegion }}' /* required */,
'{{ Target }}' /* required */,
{{ DryRun }},
'{{ region }}'
RETURNING
HomeRegionControl
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: home_region_controls
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the home_region_controls resource.
    - name: HomeRegion
      value: "{{ HomeRegion }}"
      description: |
        The name of the home region of the calling account.
    - name: Target
      description: |
        The account for which this command sets up a home region control. The Target is always of type ACCOUNT.
      value:
        Type: "{{ Type }}"
        Id: "{{ Id }}"
    - name: DryRun
      value: {{ DryRun }}
      description: |
        Optional Boolean flag to indicate whether any effect should take place. It tests whether the caller has permission to make the call.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_home_region_control"
    values={[
        { label: 'delete_home_region_control', value: 'delete_home_region_control' }
    ]}
>
<TabItem value="delete_home_region_control">

This operation deletes the home region configuration for the calling account. The operation does not delete discovery or migration tracking data in the home region.

```sql
DELETE FROM aws.migrationhub_config.home_region_controls
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
