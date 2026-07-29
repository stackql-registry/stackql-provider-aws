--- 
title: random_passwords
hide_title: false
hide_table_of_contents: false
keywords:
  - random_passwords
  - secretsmanager
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

Creates, updates, deletes, gets or lists a <code>random_passwords</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="random_passwords" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.secretsmanager.random_passwords" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_random_password"
    values={[
        { label: 'get_random_password', value: 'get_random_password' }
    ]}
>
<TabItem value="get_random_password">

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
    <td><CopyableCode code="random_password" /></td>
    <td><code>string</code></td>
    <td>A string with the password.</td>
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
    <td><a href="#get_random_password"><CopyableCode code="get_random_password" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Generates a random password. We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support. By default, Secrets Manager uses uppercase and lowercase letters, numbers, and the following characters in passwords: !\"#$%&'()*+,-./:;&lt;=&gt;?@&#91;\\&#93;^_`&#123;|&#125;~ Secrets Manager generates a CloudTrail log entry when you call this action. Required permissions: secretsmanager:GetRandomPassword. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.</td>
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
    defaultValue="get_random_password"
    values={[
        { label: 'get_random_password', value: 'get_random_password' }
    ]}
>
<TabItem value="get_random_password">

Generates a random password. We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support. By default, Secrets Manager uses uppercase and lowercase letters, numbers, and the following characters in passwords: !\"#$%&'()*+,-./:;&lt;=&gt;?@[\\]^_`&#123;|&#125;~ Secrets Manager generates a CloudTrail log entry when you call this action. Required permissions: secretsmanager:GetRandomPassword. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.

```sql
SELECT
random_password
FROM aws.secretsmanager.random_passwords
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
