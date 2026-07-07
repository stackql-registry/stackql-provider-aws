--- 
title: ipam_external_resource_verification_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_external_resource_verification_tokens
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

Creates, updates, deletes, gets or lists an <code>ipam_external_resource_verification_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_external_resource_verification_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_external_resource_verification_tokens" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ipam_external_resource_verification_tokens"
    values={[
        { label: 'describe_ipam_external_resource_verification_tokens', value: 'describe_ipam_external_resource_verification_tokens' }
    ]}
>
<TabItem value="describe_ipam_external_resource_verification_tokens">

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
    <td><CopyableCode code="IpamArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the IPAM that created the token.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamExternalResourceVerificationTokenArn" /></td>
    <td><code>string</code></td>
    <td>Token ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamExternalResourceVerificationTokenId" /></td>
    <td><code>string</code></td>
    <td>The ID of the token.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM that created the token.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamRegion" /></td>
    <td><code>string</code></td>
    <td>Region of the IPAM that created the token.</td>
</tr>
<tr>
    <td><CopyableCode code="NotAfter" /></td>
    <td><code>string</code></td>
    <td>Token expiration.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>Token state.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Token status.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>Token tags.</td>
</tr>
<tr>
    <td><CopyableCode code="TokenName" /></td>
    <td><code>string</code></td>
    <td>Token name.</td>
</tr>
<tr>
    <td><CopyableCode code="TokenValue" /></td>
    <td><code>string</code></td>
    <td>Token value.</td>
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
    <td><a href="#describe_ipam_external_resource_verification_tokens"><CopyableCode code="describe_ipam_external_resource_verification_tokens" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-IpamExternalResourceVerificationTokenId"><code>IpamExternalResourceVerificationTokenId</code></a></td>
    <td>Describe verification tokens. A verification token is an Amazon Web Services-generated random value that you can use to prove ownership of an external resource. For example, you can use a verification token to validate that you control a public IP address range when you bring an IP address range to Amazon Web Services (BYOIP).</td>
</tr>
<tr>
    <td><a href="#create_ipam_external_resource_verification_token"><CopyableCode code="create_ipam_external_resource_verification_token" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-IpamId"><code>IpamId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Create a verification token. A verification token is an Amazon Web Services-generated random value that you can use to prove ownership of an external resource. For example, you can use a verification token to validate that you control a public IP address range when you bring an IP address range to Amazon Web Services (BYOIP).</td>
</tr>
<tr>
    <td><a href="#delete_ipam_external_resource_verification_token"><CopyableCode code="delete_ipam_external_resource_verification_token" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-IpamExternalResourceVerificationTokenId"><code>IpamExternalResourceVerificationTokenId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Delete a verification token. A verification token is an Amazon Web Services-generated random value that you can use to prove ownership of an external resource. For example, you can use a verification token to validate that you control a public IP address range when you bring an IP address range to Amazon Web Services (BYOIP).</td>
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
<tr id="parameter-IpamExternalResourceVerificationTokenId">
    <td><CopyableCode code="IpamExternalResourceVerificationTokenId" /></td>
    <td><code>string</code></td>
    <td>The token ID.</td>
</tr>
<tr id="parameter-IpamId">
    <td><CopyableCode code="IpamId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM that will create the token.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters for the request. For more information about filtering, see Filtering CLI output. Available filters: ipam-arn ipam-external-resource-verification-token-arn ipam-external-resource-verification-token-id ipam-id ipam-region state status token-name token-value</td>
</tr>
<tr id="parameter-IpamExternalResourceVerificationTokenId">
    <td><CopyableCode code="IpamExternalResourceVerificationTokenId" /></td>
    <td><code>array</code></td>
    <td>Verification token IDs.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of tokens to return in one page of results.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>Token tags.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_ipam_external_resource_verification_tokens"
    values={[
        { label: 'describe_ipam_external_resource_verification_tokens', value: 'describe_ipam_external_resource_verification_tokens' }
    ]}
>
<TabItem value="describe_ipam_external_resource_verification_tokens">

Describe verification tokens. A verification token is an Amazon Web Services-generated random value that you can use to prove ownership of an external resource. For example, you can use a verification token to validate that you control a public IP address range when you bring an IP address range to Amazon Web Services (BYOIP).

```sql
SELECT
IpamArn,
IpamExternalResourceVerificationTokenArn,
IpamExternalResourceVerificationTokenId,
IpamId,
IpamRegion,
NotAfter,
State,
Status,
Tags,
TokenName,
TokenValue
FROM aws.ec2.ipam_external_resource_verification_tokens
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND IpamExternalResourceVerificationTokenId = '{{ IpamExternalResourceVerificationTokenId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ipam_external_resource_verification_token"
    values={[
        { label: 'create_ipam_external_resource_verification_token', value: 'create_ipam_external_resource_verification_token' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ipam_external_resource_verification_token">

Create a verification token. A verification token is an Amazon Web Services-generated random value that you can use to prove ownership of an external resource. For example, you can use a verification token to validate that you control a public IP address range when you bring an IP address range to Amazon Web Services (BYOIP).

```sql
INSERT INTO aws.ec2.ipam_external_resource_verification_tokens (
IpamId,
region,
DryRun,
TagSpecification,
ClientToken
)
SELECT 
'{{ IpamId }}',
'{{ region }}',
'{{ DryRun }}',
'{{ TagSpecification }}',
'{{ ClientToken }}'
RETURNING
IpamArn,
IpamExternalResourceVerificationTokenArn,
IpamExternalResourceVerificationTokenId,
IpamId,
IpamRegion,
NotAfter,
State,
Status,
Tags,
TokenName,
TokenValue
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ipam_external_resource_verification_tokens
  props:
    - name: IpamId
      value: "{{ IpamId }}"
      description: Required parameter for the ipam_external_resource_verification_tokens resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ipam_external_resource_verification_tokens resource.
    - name: DryRun
      value: {{ DryRun }}
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: Token tags.
      description: Token tags.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
      description: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ipam_external_resource_verification_token"
    values={[
        { label: 'delete_ipam_external_resource_verification_token', value: 'delete_ipam_external_resource_verification_token' }
    ]}
>
<TabItem value="delete_ipam_external_resource_verification_token">

Delete a verification token. A verification token is an Amazon Web Services-generated random value that you can use to prove ownership of an external resource. For example, you can use a verification token to validate that you control a public IP address range when you bring an IP address range to Amazon Web Services (BYOIP).

```sql
DELETE FROM aws.ec2.ipam_external_resource_verification_tokens
WHERE IpamExternalResourceVerificationTokenId = '{{ IpamExternalResourceVerificationTokenId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
