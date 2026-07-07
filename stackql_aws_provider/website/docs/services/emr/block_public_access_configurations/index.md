--- 
title: block_public_access_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - block_public_access_configurations
  - emr
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

Creates, updates, deletes, gets or lists a <code>block_public_access_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="block_public_access_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr.block_public_access_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_block_public_access_configuration"
    values={[
        { label: 'get_block_public_access_configuration', value: 'get_block_public_access_configuration' }
    ]}
>
<TabItem value="get_block_public_access_configuration">

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
    <td><CopyableCode code="BlockPublicAccessConfiguration" /></td>
    <td><code>object</code></td>
    <td>A configuration for Amazon EMR block public access. The configuration applies to all clusters created in your account for the current Region. The configuration specifies whether block public access is enabled. If block public access is enabled, security groups associated with the cluster cannot have rules that allow inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an exception using PermittedPublicSecurityGroupRuleRanges in the BlockPublicAccessConfiguration. By default, Port 22 (SSH) is an exception, and public access is allowed on this port. You can change this by updating the block public access configuration to remove the exception. For accounts that created clusters in a Region before November 25, 2019, block public access is disabled by default in that Region. To use this feature, you must manually enable and configure it. For accounts that did not create an Amazon EMR cluster in a Region before this date, block public access is enabled by default in that Region.</td>
</tr>
<tr>
    <td><CopyableCode code="BlockPublicAccessConfigurationMetadata" /></td>
    <td><code>object</code></td>
    <td>Properties that describe the Amazon Web Services principal that created the BlockPublicAccessConfiguration using the PutBlockPublicAccessConfiguration action as well as the date and time that the configuration was created. Each time a configuration for block public access is updated, Amazon EMR updates this metadata.</td>
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
    <td><a href="#get_block_public_access_configuration"><CopyableCode code="get_block_public_access_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see Configure Block Public Access for Amazon EMR in the Amazon EMR Management Guide.</td>
</tr>
<tr>
    <td><a href="#put_block_public_access_configuration"><CopyableCode code="put_block_public_access_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BlockPublicAccessConfiguration"><code>BlockPublicAccessConfiguration</code></a></td>
    <td></td>
    <td>Creates or updates an Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see Configure Block Public Access for Amazon EMR in the Amazon EMR Management Guide.</td>
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
    defaultValue="get_block_public_access_configuration"
    values={[
        { label: 'get_block_public_access_configuration', value: 'get_block_public_access_configuration' }
    ]}
>
<TabItem value="get_block_public_access_configuration">

Returns the Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see Configure Block Public Access for Amazon EMR in the Amazon EMR Management Guide.

```sql
SELECT
BlockPublicAccessConfiguration,
BlockPublicAccessConfigurationMetadata
FROM aws.emr.block_public_access_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_block_public_access_configuration"
    values={[
        { label: 'put_block_public_access_configuration', value: 'put_block_public_access_configuration' }
    ]}
>
<TabItem value="put_block_public_access_configuration">

Creates or updates an Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see Configure Block Public Access for Amazon EMR in the Amazon EMR Management Guide.

```sql
REPLACE aws.emr.block_public_access_configurations
SET 
BlockPublicAccessConfiguration = '{{ BlockPublicAccessConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND BlockPublicAccessConfiguration = '{{ BlockPublicAccessConfiguration }}' --required;
```
</TabItem>
</Tabs>
