--- 
title: registry_catalog_datas
hide_title: false
hide_table_of_contents: false
keywords:
  - registry_catalog_datas
  - ecr_public
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

Creates, updates, deletes, gets or lists a <code>registry_catalog_datas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="registry_catalog_datas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecr_public.registry_catalog_datas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_registry_catalog_data"
    values={[
        { label: 'get_registry_catalog_data', value: 'get_registry_catalog_data' }
    ]}
>
<TabItem value="get_registry_catalog_data">

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
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name for a public registry. This appears on the Amazon ECR Public Gallery. Only accounts that have the verified account badge can have a registry display name.</td>
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
    <td><a href="#get_registry_catalog_data"><CopyableCode code="get_registry_catalog_data" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves catalog metadata for a public registry.</td>
</tr>
<tr>
    <td><a href="#put_registry_catalog_data"><CopyableCode code="put_registry_catalog_data" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create or update the catalog data for a public registry.</td>
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
    defaultValue="get_registry_catalog_data"
    values={[
        { label: 'get_registry_catalog_data', value: 'get_registry_catalog_data' }
    ]}
>
<TabItem value="get_registry_catalog_data">

Retrieves catalog metadata for a public registry.

```sql
SELECT
display_name
FROM aws.ecr_public.registry_catalog_datas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_registry_catalog_data"
    values={[
        { label: 'put_registry_catalog_data', value: 'put_registry_catalog_data' }
    ]}
>
<TabItem value="put_registry_catalog_data">

Create or update the catalog data for a public registry.

```sql
REPLACE aws.ecr_public.registry_catalog_datas
SET 
displayName = '{{ displayName }}'
WHERE 
region = '{{ region }}' --required
RETURNING
registry_catalog_data;
```
</TabItem>
</Tabs>
