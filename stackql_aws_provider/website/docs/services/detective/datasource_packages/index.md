--- 
title: datasource_packages
hide_title: false
hide_table_of_contents: false
keywords:
  - datasource_packages
  - detective
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

Creates, updates, deletes, gets or lists a <code>datasource_packages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datasource_packages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.detective.datasource_packages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_datasource_packages"
    values={[
        { label: 'list_datasource_packages', value: 'list_datasource_packages' }
    ]}
>
<TabItem value="list_datasource_packages">

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
    <td><CopyableCode code="datasource_packages" /></td>
    <td><code>object</code></td>
    <td>Details on the data source packages active in the behavior graph.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.</td>
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
    <td><a href="#list_datasource_packages"><CopyableCode code="list_datasource_packages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists data source packages in the behavior graph.</td>
</tr>
<tr>
    <td><a href="#update_datasource_packages"><CopyableCode code="update_datasource_packages" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GraphArn"><code>GraphArn</code></a>, <a href="#parameter-DatasourcePackages"><code>DatasourcePackages</code></a></td>
    <td></td>
    <td>Starts a data source package for the Detective behavior graph.</td>
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
    defaultValue="list_datasource_packages"
    values={[
        { label: 'list_datasource_packages', value: 'list_datasource_packages' }
    ]}
>
<TabItem value="list_datasource_packages">

Lists data source packages in the behavior graph.

```sql
SELECT
datasource_packages,
next_token
FROM aws.detective.datasource_packages
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_datasource_packages"
    values={[
        { label: 'update_datasource_packages', value: 'update_datasource_packages' }
    ]}
>
<TabItem value="update_datasource_packages">

Starts a data source package for the Detective behavior graph.

```sql
UPDATE aws.detective.datasource_packages
SET 
GraphArn = '{{ GraphArn }}',
DatasourcePackages = '{{ DatasourcePackages }}'
WHERE 
region = '{{ region }}' --required
AND GraphArn = '{{ GraphArn }}' --required
AND DatasourcePackages = '{{ DatasourcePackages }}' --required;
```
</TabItem>
</Tabs>
