--- 
title: identity_contexts
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_contexts
  - quicksight
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

Creates, updates, deletes, gets or lists an <code>identity_contexts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_contexts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.identity_contexts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_identity_context"
    values={[
        { label: 'get_identity_context', value: 'get_identity_context' }
    ]}
>
<TabItem value="get_identity_context">

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
    <td><CopyableCode code="context" /></td>
    <td><code>string</code></td>
    <td>The identity context information for the user. This is an identity token that should be used as the ContextAssertion parameter in the STS AssumeRole API call to obtain identity enhanced Amazon Web Services credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
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
    <td><a href="#get_identity_context"><CopyableCode code="get_identity_context" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the identity context for a Quick Sight user in a specified namespace, allowing you to obtain identity tokens that can be used with identity-enhanced IAM role sessions to call identity-aware APIs. Currently, you can call the following APIs with identity-enhanced Credentials StartDashboardSnapshotJob DescribeDashboardSnapshotJob DescribeDashboardSnapshotJobResult Supported Authentication Methods This API supports Quick Sight native users, IAM federated users, and Active Directory users. For Quick Sight users authenticated by Amazon Web Services Identity Center, see Identity Center documentation on identity-enhanced IAM role sessions. Supported Regions The GetIdentityContext API works only in regions that support at least one of these identity types: Amazon Quick Sight native identity IAM federated identity Active Directory To use this API successfully, call it in the same region where your user's identity resides. For example, if your user's identity is in us-east-1, make the API call in us-east-1. For more information about managing identities in Amazon Quick Sight, see Identity and access management in Amazon Quick Sight in the Amazon Quick Sight User Guide. Getting Identity-Enhanced Credentials To obtain identity-enhanced credentials, follow these steps: Call the GetIdentityContext API to retrieve an identity token for the specified user. Use the identity token with the STS AssumeRole API to obtain identity-enhanced IAM role session credentials. Usage with STS AssumeRole The identity token returned by this API should be used with the STS AssumeRole API to obtain credentials for an identity-enhanced IAM role session. When calling AssumeRole, include the identity token in the ProvidedContexts parameter with ProviderArn set to arn:aws:iam::aws:contextProvider/QuickSight and ContextAssertion set to the identity token received from this API. The assumed role must allow the sts:SetContext action in addition to sts:AssumeRole in its trust relationship policy. The trust policy should include both actions for the principal that will be assuming the role.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the Amazon Web Services account that the user whose identity context you want to retrieve is in. Currently, you use the ID for the Amazon Web Services account that contains your Quick Sight account.</td>
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
    defaultValue="get_identity_context"
    values={[
        { label: 'get_identity_context', value: 'get_identity_context' }
    ]}
>
<TabItem value="get_identity_context">

Retrieves the identity context for a Quick Sight user in a specified namespace, allowing you to obtain identity tokens that can be used with identity-enhanced IAM role sessions to call identity-aware APIs. Currently, you can call the following APIs with identity-enhanced Credentials StartDashboardSnapshotJob DescribeDashboardSnapshotJob DescribeDashboardSnapshotJobResult Supported Authentication Methods This API supports Quick Sight native users, IAM federated users, and Active Directory users. For Quick Sight users authenticated by Amazon Web Services Identity Center, see Identity Center documentation on identity-enhanced IAM role sessions. Supported Regions The GetIdentityContext API works only in regions that support at least one of these identity types: Amazon Quick Sight native identity IAM federated identity Active Directory To use this API successfully, call it in the same region where your user's identity resides. For example, if your user's identity is in us-east-1, make the API call in us-east-1. For more information about managing identities in Amazon Quick Sight, see Identity and access management in Amazon Quick Sight in the Amazon Quick Sight User Guide. Getting Identity-Enhanced Credentials To obtain identity-enhanced credentials, follow these steps: Call the GetIdentityContext API to retrieve an identity token for the specified user. Use the identity token with the STS AssumeRole API to obtain identity-enhanced IAM role session credentials. Usage with STS AssumeRole The identity token returned by this API should be used with the STS AssumeRole API to obtain credentials for an identity-enhanced IAM role session. When calling AssumeRole, include the identity token in the ProvidedContexts parameter with ProviderArn set to arn:aws:iam::aws:contextProvider/QuickSight and ContextAssertion set to the identity token received from this API. The assumed role must allow the sts:SetContext action in addition to sts:AssumeRole in its trust relationship policy. The trust policy should include both actions for the principal that will be assuming the role.

```sql
SELECT
context,
request_id,
status
FROM aws.quicksight.identity_contexts
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
