--- 
title: passwords
hide_title: false
hide_table_of_contents: false
keywords:
  - passwords
  - iam
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

Creates, updates, deletes, gets or lists a <code>passwords</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="passwords" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.passwords" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#change_password"><CopyableCode code="change_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-OldPassword"><code>OldPassword</code></a>, <a href="#parameter-NewPassword"><code>NewPassword</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Changes the password of the IAM user who is calling this operation. This operation can be performed using the CLI, the Amazon Web Services API, or the My Security Credentials page in the Amazon Web Services Management Console. The Amazon Web Services account root user password is not affected by this operation. Use UpdateLoginProfile to use the CLI, the Amazon Web Services API, or the Users page in the IAM console to change the password for any IAM user. For more information about modifying passwords, see Managing passwords in the IAM User Guide.</td>
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
<tr id="parameter-NewPassword">
    <td><CopyableCode code="NewPassword" /></td>
    <td><code>string</code></td>
    <td>The new password. The new password must conform to the Amazon Web Services account's password policy, if one exists. The regex pattern that is used to validate this parameter is a string of characters. That string can include almost any printable ASCII character from the space (\u0020) through the end of the ASCII character range (\u00FF). You can also include the tab (\u0009), line feed (\u000A), and carriage return (\u000D) characters. Any of these characters are valid in a password. However, many tools, such as the Amazon Web Services Management Console, might restrict the ability to type certain characters because they have special meaning within that tool.</td>
</tr>
<tr id="parameter-OldPassword">
    <td><CopyableCode code="OldPassword" /></td>
    <td><code>string</code></td>
    <td>The IAM user's current password.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="change_password"
    values={[
        { label: 'change_password', value: 'change_password' }
    ]}
>
<TabItem value="change_password">

Changes the password of the IAM user who is calling this operation. This operation can be performed using the CLI, the Amazon Web Services API, or the My Security Credentials page in the Amazon Web Services Management Console. The Amazon Web Services account root user password is not affected by this operation. Use UpdateLoginProfile to use the CLI, the Amazon Web Services API, or the Users page in the IAM console to change the password for any IAM user. For more information about modifying passwords, see Managing passwords in the IAM User Guide.

```sql
EXEC aws.iam.passwords.change_password 
@OldPassword='{{ OldPassword }}' --required, 
@NewPassword='{{ NewPassword }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
