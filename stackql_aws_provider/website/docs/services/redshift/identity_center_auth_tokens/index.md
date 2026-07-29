--- 
title: identity_center_auth_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_center_auth_tokens
  - redshift
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

Creates, updates, deletes, gets or lists an <code>identity_center_auth_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_center_auth_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.identity_center_auth_tokens" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_identity_center_auth_token"
    values={[
        { label: 'get_identity_center_auth_token', value: 'get_identity_center_auth_token' }
    ]}
>
<TabItem value="get_identity_center_auth_token">

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
    <td><CopyableCode code="expiration_time" /></td>
    <td><code>string</code></td>
    <td>The time (UTC) when the token expires. After this timestamp, the token will no longer be valid for authentication.</td>
</tr>
<tr>
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>The encrypted authentication token containing the caller's Amazon Web Services IAM Identity Center identity information. This token is encrypted using Key Management Service and can only be decrypted by the specified Amazon Redshift clusters. Use this token with Amazon Redshift drivers to authenticate using your Amazon Web Services IAM Identity Center identity.</td>
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
    <td><a href="#get_identity_center_auth_token"><CopyableCode code="get_identity_center_auth_token" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ClusterIds"><code>ClusterIds</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Generates an encrypted authentication token that propagates the caller's Amazon Web Services IAM Identity Center identity to Amazon Redshift clusters. This API extracts the Amazon Web Services IAM Identity Center identity from enhanced credentials and creates a secure token that Amazon Redshift drivers can use for authentication. The token is encrypted using Key Management Service (KMS) and can only be decrypted by the specified Amazon Redshift clusters. The token contains the caller's Amazon Web Services IAM Identity Center identity information and is valid for a limited time period. This API is exclusively for use with Amazon Web Services IAM Identity Center enhanced credentials. If the caller is not using enhanced credentials with embedded Amazon Web Services IAM Identity Center identity, the API will return an error.</td>
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
<tr id="parameter-ClusterIds">
    <td><CopyableCode code="ClusterIds" /></td>
    <td><code>array</code></td>
    <td>A list of cluster identifiers that the generated token can be used with. The token will be scoped to only allow authentication to the specified clusters. Constraints: ClusterIds must contain at least 1 cluster identifier. ClusterIds can hold a maximum of 20 cluster identifiers. Cluster identifiers must be 1 to 63 characters in length. The characters accepted for cluster identifiers are the following: Alphanumeric characters Hyphens Cluster identifiers must start with a letter. Cluster identifiers can't end with a hyphen or contain two consecutive hyphens.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_identity_center_auth_token"
    values={[
        { label: 'get_identity_center_auth_token', value: 'get_identity_center_auth_token' }
    ]}
>
<TabItem value="get_identity_center_auth_token">

Generates an encrypted authentication token that propagates the caller's Amazon Web Services IAM Identity Center identity to Amazon Redshift clusters. This API extracts the Amazon Web Services IAM Identity Center identity from enhanced credentials and creates a secure token that Amazon Redshift drivers can use for authentication. The token is encrypted using Key Management Service (KMS) and can only be decrypted by the specified Amazon Redshift clusters. The token contains the caller's Amazon Web Services IAM Identity Center identity information and is valid for a limited time period. This API is exclusively for use with Amazon Web Services IAM Identity Center enhanced credentials. If the caller is not using enhanced credentials with embedded Amazon Web Services IAM Identity Center identity, the API will return an error.

```sql
SELECT
expiration_time,
token
FROM aws.redshift.identity_center_auth_tokens
WHERE ClusterIds = '{{ ClusterIds }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
