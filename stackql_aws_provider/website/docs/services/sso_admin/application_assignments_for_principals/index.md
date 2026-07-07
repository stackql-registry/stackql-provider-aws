--- 
title: application_assignments_for_principals
hide_title: false
hide_table_of_contents: false
keywords:
  - application_assignments_for_principals
  - sso_admin
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

Creates, updates, deletes, gets or lists an <code>application_assignments_for_principals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_assignments_for_principals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso_admin.application_assignments_for_principals" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_application_assignments_for_principal"
    values={[
        { label: 'list_application_assignments_for_principal', value: 'list_application_assignments_for_principal' }
    ]}
>
<TabItem value="list_application_assignments_for_principal">

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
    <td><CopyableCode code="ApplicationArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the application to which the specified principal is assigned. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;&#123;1,5&#125;)&#123;0,3&#125;:sso::\d&#123;12&#125;:application/(sso)?ins-&#91;a-zA-Z0-9-.&#93;&#123;16&#125;/apl-&#91;a-zA-Z0-9&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PrincipalId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the principal assigned to the application. (pattern: &lt;code&gt;(&#91;0-9a-f&#93;&#123;10&#125;-|)&#91;A-Fa-f0-9&#93;&#123;8&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PrincipalType" /></td>
    <td><code>string</code></td>
    <td>The type of the principal assigned to the application. (USER, GROUP)</td>
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
    <td><a href="#list_application_assignments_for_principal"><CopyableCode code="list_application_assignments_for_principal" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the applications to which a specified principal is assigned. You must provide a filter when calling this action from a member account against your organization instance of IAM Identity Center. A filter is not required when called from the management account against an organization instance of IAM Identity Center, or from a member account against an account instance of IAM Identity Center in the same account.</td>
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
    defaultValue="list_application_assignments_for_principal"
    values={[
        { label: 'list_application_assignments_for_principal', value: 'list_application_assignments_for_principal' }
    ]}
>
<TabItem value="list_application_assignments_for_principal">

Lists the applications to which a specified principal is assigned. You must provide a filter when calling this action from a member account against your organization instance of IAM Identity Center. A filter is not required when called from the management account against an organization instance of IAM Identity Center, or from a member account against an account instance of IAM Identity Center in the same account.

```sql
SELECT
ApplicationArn,
PrincipalId,
PrincipalType
FROM aws.sso_admin.application_assignments_for_principals
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
