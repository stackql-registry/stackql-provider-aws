--- 
title: ebs_encryption_by_defaults
hide_title: false
hide_table_of_contents: false
keywords:
  - ebs_encryption_by_defaults
  - ec2
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

Creates, updates, deletes, gets or lists an <code>ebs_encryption_by_defaults</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ebs_encryption_by_defaults" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ebs_encryption_by_defaults" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ebs_encryption_by_default"
    values={[
        { label: 'get_ebs_encryption_by_default', value: 'get_ebs_encryption_by_default' }
    ]}
>
<TabItem value="get_ebs_encryption_by_default">

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
    <td><CopyableCode code="EbsEncryptionByDefault" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether encryption by default is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="SseType" /></td>
    <td><code>string</code></td>
    <td>Reserved for future use.</td>
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
    <td><a href="#get_ebs_encryption_by_default"><CopyableCode code="get_ebs_encryption_by_default" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes whether EBS encryption by default is enabled for your account in the current Region. For more information, see Amazon EBS encryption in the Amazon EBS User Guide.</td>
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
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ebs_encryption_by_default"
    values={[
        { label: 'get_ebs_encryption_by_default', value: 'get_ebs_encryption_by_default' }
    ]}
>
<TabItem value="get_ebs_encryption_by_default">

Describes whether EBS encryption by default is enabled for your account in the current Region. For more information, see Amazon EBS encryption in the Amazon EBS User Guide.

```sql
SELECT
EbsEncryptionByDefault,
SseType
FROM aws.ec2.ebs_encryption_by_defaults
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
