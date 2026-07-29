--- 
title: sol_function_package_contents
hide_title: false
hide_table_of_contents: false
keywords:
  - sol_function_package_contents
  - tnb
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

Creates, updates, deletes, gets or lists a <code>sol_function_package_contents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sol_function_package_contents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.tnb.sol_function_package_contents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sol_function_package_content"
    values={[
        { label: 'get_sol_function_package_content', value: 'get_sol_function_package_content' }
    ]}
>
<TabItem value="get_sol_function_package_content">

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
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>Indicates the media type of the resource. (application/zip)</td>
</tr>
<tr>
    <td><CopyableCode code="package_content" /></td>
    <td><code>string (byte)</code></td>
    <td>Contents of the function package.</td>
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
    <td><a href="#get_sol_function_package_content"><CopyableCode code="get_sol_function_package_content" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-vnf_pkg_id"><code>vnf_pkg_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the contents of a function package. A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</td>
</tr>
<tr>
    <td><a href="#put_sol_function_package_content"><CopyableCode code="put_sol_function_package_content" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-vnf_pkg_id"><code>vnf_pkg_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-file"><code>file</code></a></td>
    <td><a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Uploads the contents of a function package. A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</td>
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
<tr id="parameter-Accept">
    <td><CopyableCode code="Accept" /></td>
    <td><code>string</code></td>
    <td>The format of the package that you want to download from the function packages.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-vnf_pkg_id">
    <td><CopyableCode code="vnf_pkg_id" /></td>
    <td><code>string</code></td>
    <td>Function package ID.</td>
</tr>
<tr id="parameter-Content-Type">
    <td><CopyableCode code="Content-Type" /></td>
    <td><code>string</code></td>
    <td>Function package content type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sol_function_package_content"
    values={[
        { label: 'get_sol_function_package_content', value: 'get_sol_function_package_content' }
    ]}
>
<TabItem value="get_sol_function_package_content">

Gets the contents of a function package. A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.

```sql
SELECT
content_type,
package_content
FROM aws.tnb.sol_function_package_contents
WHERE Accept = '{{ Accept }}' -- required
AND vnf_pkg_id = '{{ vnf_pkg_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_sol_function_package_content"
    values={[
        { label: 'put_sol_function_package_content', value: 'put_sol_function_package_content' }
    ]}
>
<TabItem value="put_sol_function_package_content">

Uploads the contents of a function package. A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.

```sql
REPLACE aws.tnb.sol_function_package_contents
SET 
file = '{{ file }}'
WHERE 
vnf_pkg_id = '{{ vnf_pkg_id }}' --required
AND region = '{{ region }}' --required
AND file = '{{ file }}' --required
AND `Content-Type` = '{{ Content-Type}}'
RETURNING
id,
metadata,
vnf_product_name,
vnf_provider,
vnfd_id,
vnfd_version;
```
</TabItem>
</Tabs>
