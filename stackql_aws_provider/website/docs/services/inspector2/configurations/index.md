--- 
title: configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - configurations
  - inspector2
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.configurations" /></td></tr>
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
    <td><CopyableCode code="ec_2_configuration" /></td>
    <td><code>object</code></td>
    <td>Specifies how the Amazon EC2 automated scan mode is currently configured for your environment.</td>
</tr>
<tr>
    <td><CopyableCode code="ecr_configuration" /></td>
    <td><code>object</code></td>
    <td>Specifies how the ECR automated re-scan duration is currently configured for your environment.</td>
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
    <td>Retrieves setting configurations for Amazon Inspector scans. If you specify an accountId, this operation returns the scan configuration for that member account. You must be the delegated administrator for the specified member account. If you do not specify an accountId, this operation returns your own scan configuration.</td>
</tr>
<tr>
    <td><a href="#update_configuration"><CopyableCode code="update_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the scan configuration for your Amazon Inspector account. If you don't specify an accountId, this operation updates the delegated administrator's configuration and propagates it to member accounts that have not been individually configured. If you specify an accountId, this operation updates that member account's configuration. Only the delegated administrator can specify an accountId; member accounts cannot call this operation.</td>
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

Retrieves setting configurations for Amazon Inspector scans. If you specify an accountId, this operation returns the scan configuration for that member account. You must be the delegated administrator for the specified member account. If you do not specify an accountId, this operation returns your own scan configuration.

```sql
SELECT
ec_2_configuration,
ecr_configuration
FROM aws.inspector2.configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_configuration"
    values={[
        { label: 'update_configuration', value: 'update_configuration' }
    ]}
>
<TabItem value="update_configuration">

Updates the scan configuration for your Amazon Inspector account. If you don't specify an accountId, this operation updates the delegated administrator's configuration and propagates it to member accounts that have not been individually configured. If you specify an accountId, this operation updates that member account's configuration. Only the delegated administrator can specify an accountId; member accounts cannot call this operation.

```sql
UPDATE aws.inspector2.configurations
SET 
accountId = '{{ accountId }}',
ecrConfiguration = '{{ ecrConfiguration }}',
ec2Configuration = '{{ ec2Configuration }}',
updateConfigurationInheritance = '{{ updateConfigurationInheritance }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
