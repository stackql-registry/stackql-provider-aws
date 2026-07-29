--- 
title: sol_network_package_descriptors
hide_title: false
hide_table_of_contents: false
keywords:
  - sol_network_package_descriptors
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

Creates, updates, deletes, gets or lists a <code>sol_network_package_descriptors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sol_network_package_descriptors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.tnb.sol_network_package_descriptors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sol_network_package_descriptor"
    values={[
        { label: 'get_sol_network_package_descriptor', value: 'get_sol_network_package_descriptor' }
    ]}
>
<TabItem value="get_sol_network_package_descriptor">

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
    <td>Indicates the media type of the resource. (text/plain)</td>
</tr>
<tr>
    <td><CopyableCode code="nsd" /></td>
    <td><code>string (byte)</code></td>
    <td>Contents of the network service descriptor in the network package.</td>
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
    <td><a href="#get_sol_network_package_descriptor"><CopyableCode code="get_sol_network_package_descriptor" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-nsd_info_id"><code>nsd_info_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the content of the network service descriptor. A network service descriptor is a .yaml file in a network package that uses the TOSCA standard to describe the network functions you want to deploy and the Amazon Web Services infrastructure you want to deploy the network functions on.</td>
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
<tr id="parameter-nsd_info_id">
    <td><CopyableCode code="nsd_info_id" /></td>
    <td><code>string</code></td>
    <td>ID of the network service descriptor in the network package.</td>
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
    defaultValue="get_sol_network_package_descriptor"
    values={[
        { label: 'get_sol_network_package_descriptor', value: 'get_sol_network_package_descriptor' }
    ]}
>
<TabItem value="get_sol_network_package_descriptor">

Gets the content of the network service descriptor. A network service descriptor is a .yaml file in a network package that uses the TOSCA standard to describe the network functions you want to deploy and the Amazon Web Services infrastructure you want to deploy the network functions on.

```sql
SELECT
content_type,
nsd
FROM aws.tnb.sol_network_package_descriptors
WHERE nsd_info_id = '{{ nsd_info_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
