--- 
title: ml_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - ml_configurations
  - cleanroomsml
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

Creates, updates, deletes, gets or lists a <code>ml_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ml_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanroomsml.ml_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ml_configuration"
    values={[
        { label: 'get_ml_configuration', value: 'get_ml_configuration' }
    ]}
>
<TabItem value="get_ml_configuration">

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
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the ML configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="default_output_location" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 location where ML model output is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>The membership ID of the member that owns the ML configuration you requested. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the ML configuration was updated.</td>
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
    <td><a href="#get_ml_configuration"><CopyableCode code="get_ml_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific ML configuration.</td>
</tr>
<tr>
    <td><a href="#put_ml_configuration"><CopyableCode code="put_ml_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-defaultOutputLocation"><code>defaultOutputLocation</code></a></td>
    <td></td>
    <td>Assigns information about an ML configuration.</td>
</tr>
<tr>
    <td><a href="#delete_ml_configuration"><CopyableCode code="delete_ml_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a ML modeling configuration.</td>
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
<tr id="parameter-membership_identifier">
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>The membership ID of the of the member that is deleting the ML modeling configuration.</td>
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
    defaultValue="get_ml_configuration"
    values={[
        { label: 'get_ml_configuration', value: 'get_ml_configuration' }
    ]}
>
<TabItem value="get_ml_configuration">

Returns information about a specific ML configuration.

```sql
SELECT
create_time,
default_output_location,
membership_identifier,
update_time
FROM aws.cleanroomsml.ml_configurations
WHERE membership_identifier = '{{ membership_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_ml_configuration"
    values={[
        { label: 'put_ml_configuration', value: 'put_ml_configuration' }
    ]}
>
<TabItem value="put_ml_configuration">

Assigns information about an ML configuration.

```sql
REPLACE aws.cleanroomsml.ml_configurations
SET 
defaultOutputLocation = '{{ defaultOutputLocation }}'
WHERE 
membership_identifier = '{{ membership_identifier }}' --required
AND region = '{{ region }}' --required
AND defaultOutputLocation = '{{ defaultOutputLocation }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ml_configuration"
    values={[
        { label: 'delete_ml_configuration', value: 'delete_ml_configuration' }
    ]}
>
<TabItem value="delete_ml_configuration">

Deletes a ML modeling configuration.

```sql
DELETE FROM aws.cleanroomsml.ml_configurations
WHERE membership_identifier = '{{ membership_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
