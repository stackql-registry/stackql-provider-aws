--- 
title: ebs_encryptions
hide_title: false
hide_table_of_contents: false
keywords:
  - ebs_encryptions
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

Creates, updates, deletes, gets or lists an <code>ebs_encryptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ebs_encryptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ebs_encryptions" /></td></tr>
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
    <td><CopyableCode code="ebs_encryption_by_default" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether encryption by default is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="sse_type" /></td>
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
<tr>
    <td><a href="#disable_ebs_encryption_by_default"><CopyableCode code="disable_ebs_encryption_by_default" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disables EBS encryption by default for your account in the current Region. After you disable encryption by default, you can still create encrypted volumes by enabling encryption when you create each volume. Disabling encryption by default does not change the encryption status of your existing volumes. For more information, see Amazon EBS encryption in the Amazon EBS User Guide.</td>
</tr>
<tr>
    <td><a href="#enable_ebs_encryption_by_default"><CopyableCode code="enable_ebs_encryption_by_default" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Enables EBS encryption by default for your account in the current Region. After you enable encryption by default, the EBS volumes that you create are always encrypted, either using the default KMS key or the KMS key that you specified when you created each volume. For more information, see Amazon EBS encryption in the Amazon EBS User Guide. Enabling encryption by default has no effect on the encryption status of your existing volumes. After you enable encryption by default, you can no longer launch instances using instance types that do not support encryption. For more information, see Supported instance types.</td>
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
ebs_encryption_by_default,
sse_type
FROM aws.ec2.ebs_encryptions
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_ebs_encryption_by_default"
    values={[
        { label: 'disable_ebs_encryption_by_default', value: 'disable_ebs_encryption_by_default' },
        { label: 'enable_ebs_encryption_by_default', value: 'enable_ebs_encryption_by_default' }
    ]}
>
<TabItem value="disable_ebs_encryption_by_default">

Disables EBS encryption by default for your account in the current Region. After you disable encryption by default, you can still create encrypted volumes by enabling encryption when you create each volume. Disabling encryption by default does not change the encryption status of your existing volumes. For more information, see Amazon EBS encryption in the Amazon EBS User Guide.

```sql
EXEC aws.ec2.ebs_encryptions.disable_ebs_encryption_by_default 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="enable_ebs_encryption_by_default">

Enables EBS encryption by default for your account in the current Region. After you enable encryption by default, the EBS volumes that you create are always encrypted, either using the default KMS key or the KMS key that you specified when you created each volume. For more information, see Amazon EBS encryption in the Amazon EBS User Guide. Enabling encryption by default has no effect on the encryption status of your existing volumes. After you enable encryption by default, you can no longer launch instances using instance types that do not support encryption. For more information, see Supported instance types.

```sql
EXEC aws.ec2.ebs_encryptions.enable_ebs_encryption_by_default 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
