--- 
title: outbound_web_identity_federations
hide_title: false
hide_table_of_contents: false
keywords:
  - outbound_web_identity_federations
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

Creates, updates, deletes, gets or lists an <code>outbound_web_identity_federations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="outbound_web_identity_federations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.outbound_web_identity_federations" /></td></tr>
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
    <td><a href="#disable_outbound_web_identity_federation"><CopyableCode code="disable_outbound_web_identity_federation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables the outbound identity federation feature for your Amazon Web Services account. When disabled, IAM principals in the account cannot use the GetWebIdentityToken API to obtain JSON Web Tokens (JWTs) for authentication with external services. This operation does not affect tokens that were issued before the feature was disabled.</td>
</tr>
<tr>
    <td><a href="#enable_outbound_web_identity_federation"><CopyableCode code="enable_outbound_web_identity_federation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables the outbound identity federation feature for your Amazon Web Services account. When enabled, IAM principals in your account can use the GetWebIdentityToken API to obtain JSON Web Tokens (JWTs) for secure authentication with external services. This operation also generates a unique issuer URL for your Amazon Web Services account.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="disable_outbound_web_identity_federation"
    values={[
        { label: 'disable_outbound_web_identity_federation', value: 'disable_outbound_web_identity_federation' },
        { label: 'enable_outbound_web_identity_federation', value: 'enable_outbound_web_identity_federation' }
    ]}
>
<TabItem value="disable_outbound_web_identity_federation">

Disables the outbound identity federation feature for your Amazon Web Services account. When disabled, IAM principals in the account cannot use the GetWebIdentityToken API to obtain JSON Web Tokens (JWTs) for authentication with external services. This operation does not affect tokens that were issued before the feature was disabled.

```sql
EXEC aws.iam.outbound_web_identity_federations.disable_outbound_web_identity_federation 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="enable_outbound_web_identity_federation">

Enables the outbound identity federation feature for your Amazon Web Services account. When enabled, IAM principals in your account can use the GetWebIdentityToken API to obtain JSON Web Tokens (JWTs) for secure authentication with external services. This operation also generates a unique issuer URL for your Amazon Web Services account.

```sql
EXEC aws.iam.outbound_web_identity_federations.enable_outbound_web_identity_federation 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
