--- 
title: sol_function_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - sol_function_instances
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

Creates, updates, deletes, gets or lists a <code>sol_function_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sol_function_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.tnb.sol_function_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sol_function_instance"
    values={[
        { label: 'get_sol_function_instance', value: 'get_sol_function_instance' },
        { label: 'list_sol_function_instances', value: 'list_sol_function_instances' }
    ]}
>
<TabItem value="get_sol_function_instance">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Network function instance ID. (pattern: &lt;code&gt;^fi-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Network function instance ARN. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-b|aws-us-gov):tnb:(&#91;a-z&#93;&#123;2&#125;(-(gov|isob|iso))?-(east|west|north|south|central)&#123;1,2&#125;-&#91;0-9&#93;):\d&#123;12&#125;:(function-instance/fi-&#91;a-f0-9&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instantiated_vnf_info" /></td>
    <td><code>object</code></td>
    <td>Information about the network function. A network function instance is a function in a function package .</td>
</tr>
<tr>
    <td><CopyableCode code="instantiation_state" /></td>
    <td><code>string</code></td>
    <td>Network function instantiation state. (INSTANTIATED, NOT_INSTANTIATED)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata of a network function instance. A network function instance is a function in a function package .</td>
</tr>
<tr>
    <td><CopyableCode code="ns_instance_id" /></td>
    <td><code>string</code></td>
    <td>Network instance ID. (pattern: &lt;code&gt;^ni-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</td>
</tr>
<tr>
    <td><CopyableCode code="vnf_pkg_id" /></td>
    <td><code>string</code></td>
    <td>Function package ID. (pattern: &lt;code&gt;^fp-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vnf_product_name" /></td>
    <td><code>string</code></td>
    <td>Network function product name.</td>
</tr>
<tr>
    <td><CopyableCode code="vnf_provider" /></td>
    <td><code>string</code></td>
    <td>Network function provider.</td>
</tr>
<tr>
    <td><CopyableCode code="vnfd_id" /></td>
    <td><code>string</code></td>
    <td>Function package descriptor ID. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vnfd_version" /></td>
    <td><code>string</code></td>
    <td>Function package descriptor version.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sol_function_instances">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Network function instance ID. (pattern: &lt;code&gt;^fi-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Network function instance ARN. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-b|aws-us-gov):tnb:(&#91;a-z&#93;&#123;2&#125;(-(gov|isob|iso))?-(east|west|north|south|central)&#123;1,2&#125;-&#91;0-9&#93;):\d&#123;12&#125;:(function-instance/fi-&#91;a-f0-9&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instantiated_vnf_info" /></td>
    <td><code>object</code></td>
    <td>Information about a network function. A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</td>
</tr>
<tr>
    <td><CopyableCode code="instantiation_state" /></td>
    <td><code>string</code></td>
    <td>Network function instance instantiation state. (INSTANTIATED, NOT_INSTANTIATED)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Network function instance metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="ns_instance_id" /></td>
    <td><code>string</code></td>
    <td>Network instance ID. (pattern: &lt;code&gt;^ni-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vnf_pkg_id" /></td>
    <td><code>string</code></td>
    <td>Function package ID. (pattern: &lt;code&gt;^fp-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vnf_pkg_name" /></td>
    <td><code>string</code></td>
    <td>Function package name.</td>
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
    <td><a href="#get_sol_function_instance"><CopyableCode code="get_sol_function_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-vnf_instance_id"><code>vnf_instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details of a network function instance, including the instantiation state and metadata from the function package descriptor in the network function package. A network function instance is a function in a function package .</td>
</tr>
<tr>
    <td><a href="#list_sol_function_instances"><CopyableCode code="list_sol_function_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-nextpage_opaque_marker"><code>nextpage_opaque_marker</code></a></td>
    <td>Lists network function instances. A network function instance is a function in a function package .</td>
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
<tr id="parameter-vnf_instance_id">
    <td><CopyableCode code="vnf_instance_id" /></td>
    <td><code>string</code></td>
    <td>ID of the network function.</td>
</tr>
<tr id="parameter-max_results">
    <td><CopyableCode code="max_results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to include in the response.</td>
</tr>
<tr id="parameter-nextpage_opaque_marker">
    <td><CopyableCode code="nextpage_opaque_marker" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sol_function_instance"
    values={[
        { label: 'get_sol_function_instance', value: 'get_sol_function_instance' },
        { label: 'list_sol_function_instances', value: 'list_sol_function_instances' }
    ]}
>
<TabItem value="get_sol_function_instance">

Gets the details of a network function instance, including the instantiation state and metadata from the function package descriptor in the network function package. A network function instance is a function in a function package .

```sql
SELECT
id,
arn,
instantiated_vnf_info,
instantiation_state,
metadata,
ns_instance_id,
tags,
vnf_pkg_id,
vnf_product_name,
vnf_provider,
vnfd_id,
vnfd_version
FROM aws.tnb.sol_function_instances
WHERE vnf_instance_id = '{{ vnf_instance_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_sol_function_instances">

Lists network function instances. A network function instance is a function in a function package .

```sql
SELECT
id,
arn,
instantiated_vnf_info,
instantiation_state,
metadata,
ns_instance_id,
vnf_pkg_id,
vnf_pkg_name
FROM aws.tnb.sol_function_instances
WHERE region = '{{ region }}' -- required
AND max_results = '{{ max_results }}'
AND nextpage_opaque_marker = '{{ nextpage_opaque_marker }}'
;
```
</TabItem>
</Tabs>
