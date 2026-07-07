--- 
title: user_stack_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - user_stack_associations
  - appstream
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

Creates, updates, deletes, gets or lists a <code>user_stack_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_stack_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appstream.user_stack_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_user_stack_associations"
    values={[
        { label: 'describe_user_stack_associations', value: 'describe_user_stack_associations' }
    ]}
>
<TabItem value="describe_user_stack_associations">

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
    <td><CopyableCode code="AuthenticationType" /></td>
    <td><code>string</code></td>
    <td>The authentication type for the user. (API, SAML, USERPOOL, AWS_AD)</td>
</tr>
<tr>
    <td><CopyableCode code="SendEmailNotification" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether a welcome email is sent to a user after the user is created in the user pool.</td>
</tr>
<tr>
    <td><CopyableCode code="StackName" /></td>
    <td><code>string</code></td>
    <td>The name of the stack that is associated with the user.</td>
</tr>
<tr>
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>The email address of the user who is associated with the stack. Users' email addresses are case-sensitive. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_user_stack_associations"><CopyableCode code="describe_user_stack_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following: The stack name The user name (email address of the user associated with the stack) and the authentication type for the user</td>
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
    defaultValue="describe_user_stack_associations"
    values={[
        { label: 'describe_user_stack_associations', value: 'describe_user_stack_associations' }
    ]}
>
<TabItem value="describe_user_stack_associations">

Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following: The stack name The user name (email address of the user associated with the stack) and the authentication type for the user

```sql
SELECT
AuthenticationType,
SendEmailNotification,
StackName,
UserName
FROM aws.appstream.user_stack_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
