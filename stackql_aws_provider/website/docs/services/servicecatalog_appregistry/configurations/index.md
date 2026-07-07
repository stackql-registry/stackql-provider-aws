--- 
title: configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - configurations
  - servicecatalog_appregistry
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

Creates, updates, deletes, gets or lists a <code>configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog_appregistry.configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_configuration"
    values={[
        { label: 'get_configuration', value: 'get_configuration' }
    ]}
>
<TabItem value="get_configuration">

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
    <td><CopyableCode code="tagQueryConfiguration" /></td>
    <td><code>object</code></td>
    <td>Includes the definition of a tagQuery.</td>
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
    <td><a href="#get_configuration"><CopyableCode code="get_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a TagKey configuration from an account.</td>
</tr>
<tr>
    <td><a href="#put_configuration"><CopyableCode code="put_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configuration"><code>configuration</code></a></td>
    <td></td>
    <td>Associates a TagKey configuration to an account.</td>
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
    defaultValue="get_configuration"
    values={[
        { label: 'get_configuration', value: 'get_configuration' }
    ]}
>
<TabItem value="get_configuration">

Retrieves a TagKey configuration from an account.

```sql
SELECT
tagQueryConfiguration
FROM aws.servicecatalog_appregistry.configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_configuration"
    values={[
        { label: 'put_configuration', value: 'put_configuration' }
    ]}
>
<TabItem value="put_configuration">

Associates a TagKey configuration to an account.

```sql
REPLACE aws.servicecatalog_appregistry.configurations
SET 
configuration = '{{ configuration }}'
WHERE 
region = '{{ region }}' --required
AND configuration = '{{ configuration }}' --required;
```
</TabItem>
</Tabs>
