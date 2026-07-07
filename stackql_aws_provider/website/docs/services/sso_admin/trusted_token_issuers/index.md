--- 
title: trusted_token_issuers
hide_title: false
hide_table_of_contents: false
keywords:
  - trusted_token_issuers
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

Creates, updates, deletes, gets or lists a <code>trusted_token_issuers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trusted_token_issuers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso_admin.trusted_token_issuers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_trusted_token_issuer"
    values={[
        { label: 'describe_trusted_token_issuer', value: 'describe_trusted_token_issuer' },
        { label: 'list_trusted_token_issuers', value: 'list_trusted_token_issuers' }
    ]}
>
<TabItem value="describe_trusted_token_issuer">

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
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the trusted token issuer configuration. (pattern: &lt;code&gt;&#91;\w+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TrustedTokenIssuerArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the trusted token issuer configuration. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;&#123;1,5&#125;)&#123;0,3&#125;:sso::\d&#123;12&#125;:trustedTokenIssuer/(sso)?ins-&#91;a-zA-Z0-9-.&#93;&#123;16&#125;/tti-&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TrustedTokenIssuerConfiguration" /></td>
    <td><code>object</code></td>
    <td>A structure the describes the settings that apply of this trusted token issuer.</td>
</tr>
<tr>
    <td><CopyableCode code="TrustedTokenIssuerType" /></td>
    <td><code>string</code></td>
    <td>The type of the trusted token issuer. (OIDC_JWT)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_trusted_token_issuers">

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
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the trusted token issuer configuration in the instance of IAM Identity Center. (pattern: &lt;code&gt;&#91;\w+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TrustedTokenIssuerArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the trusted token issuer configuration in the instance of IAM Identity Center. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;&#123;1,5&#125;)&#123;0,3&#125;:sso::\d&#123;12&#125;:trustedTokenIssuer/(sso)?ins-&#91;a-zA-Z0-9-.&#93;&#123;16&#125;/tti-&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TrustedTokenIssuerType" /></td>
    <td><code>string</code></td>
    <td>The type of trusted token issuer. (OIDC_JWT)</td>
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
    <td><a href="#describe_trusted_token_issuer"><CopyableCode code="describe_trusted_token_issuer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about a trusted token issuer configuration stored in an instance of IAM Identity Center. Details include the name of the trusted token issuer, the issuer URL, and the path of the source attribute and the destination attribute for a trusted token issuer configuration.</td>
</tr>
<tr>
    <td><a href="#list_trusted_token_issuers"><CopyableCode code="list_trusted_token_issuers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the trusted token issuers configured in an instance of IAM Identity Center.</td>
</tr>
<tr>
    <td><a href="#create_trusted_token_issuer"><CopyableCode code="create_trusted_token_issuer" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceArn"><code>InstanceArn</code></a>, <a href="#parameter-TrustedTokenIssuerType"><code>TrustedTokenIssuerType</code></a>, <a href="#parameter-TrustedTokenIssuerConfiguration"><code>TrustedTokenIssuerConfiguration</code></a></td>
    <td></td>
    <td>Creates a connection to a trusted token issuer in an instance of IAM Identity Center. A trusted token issuer enables trusted identity propagation to be used with applications that authenticate outside of Amazon Web Services. This trusted token issuer describes an external identity provider (IdP) that can generate claims or assertions in the form of access tokens for a user. Applications enabled for IAM Identity Center can use these tokens for authentication.</td>
</tr>
<tr>
    <td><a href="#update_trusted_token_issuer"><CopyableCode code="update_trusted_token_issuer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrustedTokenIssuerArn"><code>TrustedTokenIssuerArn</code></a></td>
    <td></td>
    <td>Updates the name of the trusted token issuer, or the path of a source attribute or destination attribute for a trusted token issuer configuration. Updating this trusted token issuer configuration might cause users to lose access to any applications that are configured to use the trusted token issuer.</td>
</tr>
<tr>
    <td><a href="#delete_trusted_token_issuer"><CopyableCode code="delete_trusted_token_issuer" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a trusted token issuer configuration from an instance of IAM Identity Center. Deleting this trusted token issuer configuration will cause users to lose access to any applications that are configured to use the trusted token issuer.</td>
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
    defaultValue="describe_trusted_token_issuer"
    values={[
        { label: 'describe_trusted_token_issuer', value: 'describe_trusted_token_issuer' },
        { label: 'list_trusted_token_issuers', value: 'list_trusted_token_issuers' }
    ]}
>
<TabItem value="describe_trusted_token_issuer">

Retrieves details about a trusted token issuer configuration stored in an instance of IAM Identity Center. Details include the name of the trusted token issuer, the issuer URL, and the path of the source attribute and the destination attribute for a trusted token issuer configuration.

```sql
SELECT
Name,
TrustedTokenIssuerArn,
TrustedTokenIssuerConfiguration,
TrustedTokenIssuerType
FROM aws.sso_admin.trusted_token_issuers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_trusted_token_issuers">

Lists all the trusted token issuers configured in an instance of IAM Identity Center.

```sql
SELECT
Name,
TrustedTokenIssuerArn,
TrustedTokenIssuerType
FROM aws.sso_admin.trusted_token_issuers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_trusted_token_issuer"
    values={[
        { label: 'create_trusted_token_issuer', value: 'create_trusted_token_issuer' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_trusted_token_issuer">

Creates a connection to a trusted token issuer in an instance of IAM Identity Center. A trusted token issuer enables trusted identity propagation to be used with applications that authenticate outside of Amazon Web Services. This trusted token issuer describes an external identity provider (IdP) that can generate claims or assertions in the form of access tokens for a user. Applications enabled for IAM Identity Center can use these tokens for authentication.

```sql
INSERT INTO aws.sso_admin.trusted_token_issuers (
InstanceArn,
Name,
TrustedTokenIssuerType,
TrustedTokenIssuerConfiguration,
ClientToken,
Tags,
region
)
SELECT 
'{{ InstanceArn }}' /* required */,
'{{ Name }}',
'{{ TrustedTokenIssuerType }}' /* required */,
'{{ TrustedTokenIssuerConfiguration }}' /* required */,
'{{ ClientToken }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
TrustedTokenIssuerArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: trusted_token_issuers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the trusted_token_issuers resource.
    - name: InstanceArn
      value: "{{ InstanceArn }}"
      description: |
        Specifies the ARN of the instance of IAM Identity Center to contain the new trusted token issuer configuration.
    - name: Name
      value: "{{ Name }}"
      description: |
        Specifies the name of the new trusted token issuer configuration.
    - name: TrustedTokenIssuerType
      value: "{{ TrustedTokenIssuerType }}"
      description: |
        Specifies the type of the new trusted token issuer.
      valid_values: ['OIDC_JWT']
    - name: TrustedTokenIssuerConfiguration
      description: |
        Specifies settings that apply to the new trusted token issuer configuration. The settings that are available depend on what TrustedTokenIssuerType you specify.
      value:
        OidcJwtConfiguration:
          IssuerUrl: "{{ IssuerUrl }}"
          ClaimAttributePath: "{{ ClaimAttributePath }}"
          IdentityStoreAttributePath: "{{ IdentityStoreAttributePath }}"
          JwksRetrievalOption: "{{ JwksRetrievalOption }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error.
    - name: Tags
      description: |
        Specifies tags to be attached to the new trusted token issuer configuration.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_trusted_token_issuer"
    values={[
        { label: 'update_trusted_token_issuer', value: 'update_trusted_token_issuer' }
    ]}
>
<TabItem value="update_trusted_token_issuer">

Updates the name of the trusted token issuer, or the path of a source attribute or destination attribute for a trusted token issuer configuration. Updating this trusted token issuer configuration might cause users to lose access to any applications that are configured to use the trusted token issuer.

```sql
UPDATE aws.sso_admin.trusted_token_issuers
SET 
TrustedTokenIssuerArn = '{{ TrustedTokenIssuerArn }}',
Name = '{{ Name }}',
TrustedTokenIssuerConfiguration = '{{ TrustedTokenIssuerConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND TrustedTokenIssuerArn = '{{ TrustedTokenIssuerArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_trusted_token_issuer"
    values={[
        { label: 'delete_trusted_token_issuer', value: 'delete_trusted_token_issuer' }
    ]}
>
<TabItem value="delete_trusted_token_issuer">

Deletes a trusted token issuer configuration from an instance of IAM Identity Center. Deleting this trusted token issuer configuration will cause users to lose access to any applications that are configured to use the trusted token issuer.

```sql
DELETE FROM aws.sso_admin.trusted_token_issuers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
