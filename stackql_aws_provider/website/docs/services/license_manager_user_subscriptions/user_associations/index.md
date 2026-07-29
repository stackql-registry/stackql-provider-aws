--- 
title: user_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - user_associations
  - license_manager_user_subscriptions
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

Creates, updates, deletes, gets or lists a <code>user_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager_user_subscriptions.user_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_user_associations"
    values={[
        { label: 'list_user_associations', value: 'list_user_associations' }
    ]}
>
<TabItem value="list_user_associations">

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
    <td><CopyableCode code="association_date" /></td>
    <td><code>string</code></td>
    <td>The date a user was associated with an EC2 instance.</td>
</tr>
<tr>
    <td><CopyableCode code="disassociation_date" /></td>
    <td><code>string</code></td>
    <td>The date a user was disassociated from an EC2 instance.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain name of the Active Directory that contains the user information for the product subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_provider" /></td>
    <td><code>object</code></td>
    <td>Refers to an identity provider.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the EC2 instance that provides user-based subscriptions.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_user_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the instance user. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-zA-Z0-9-\.&#93;&#123;1,510&#125;/&#91;a-zA-Z0-9-\.&#93;&#123;1,510&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a user associated with an EC2 instance.</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The status message for users of an EC2 instance.</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The user name from the identity provider for the user.</td>
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
    <td><a href="#list_user_associations"><CopyableCode code="list_user_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists user associations for an identity provider.</td>
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
    defaultValue="list_user_associations"
    values={[
        { label: 'list_user_associations', value: 'list_user_associations' }
    ]}
>
<TabItem value="list_user_associations">

Lists user associations for an identity provider.

```sql
SELECT
association_date,
disassociation_date,
domain,
identity_provider,
instance_id,
instance_user_arn,
status,
status_message,
username
FROM aws.license_manager_user_subscriptions.user_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
