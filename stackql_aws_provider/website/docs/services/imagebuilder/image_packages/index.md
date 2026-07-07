--- 
title: image_packages
hide_title: false
hide_table_of_contents: false
keywords:
  - image_packages
  - imagebuilder
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

Creates, updates, deletes, gets or lists an <code>image_packages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_packages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.image_packages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_image_packages"
    values={[
        { label: 'list_image_packages', value: 'list_image_packages' }
    ]}
>
<TabItem value="list_image_packages">

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
    <td><CopyableCode code="packageName" /></td>
    <td><code>string</code></td>
    <td>The name of the package that's reported to the operating system package manager.</td>
</tr>
<tr>
    <td><CopyableCode code="packageVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the package that's reported to the operating system package manager.</td>
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
    <td><a href="#list_image_packages"><CopyableCode code="list_image_packages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the Packages that are associated with an Image Build Version, as determined by Amazon Web Services Systems Manager Inventory at build time.</td>
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
    defaultValue="list_image_packages"
    values={[
        { label: 'list_image_packages', value: 'list_image_packages' }
    ]}
>
<TabItem value="list_image_packages">

List the Packages that are associated with an Image Build Version, as determined by Amazon Web Services Systems Manager Inventory at build time.

```sql
SELECT
packageName,
packageVersion
FROM aws.imagebuilder.image_packages
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
