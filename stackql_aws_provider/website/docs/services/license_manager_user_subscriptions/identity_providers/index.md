--- 
title: identity_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_providers
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

Creates, updates, deletes, gets or lists an <code>identity_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager_user_subscriptions.identity_providers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_identity_providers"
    values={[
        { label: 'list_identity_providers', value: 'list_identity_providers' }
    ]}
>
<TabItem value="list_identity_providers">

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
    <td><CopyableCode code="FailureMessage" /></td>
    <td><code>string</code></td>
    <td>The failure message associated with an identity provider.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityProvider" /></td>
    <td><code>object</code></td>
    <td>Refers to an identity provider.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityProviderArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the identity provider. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-zA-Z0-9-\.&#93;&#123;1,510&#125;/&#91;a-zA-Z0-9-\.&#93;&#123;1,510&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerAccountId" /></td>
    <td><code>string</code></td>
    <td>The AWS Account ID of the owner of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="Product" /></td>
    <td><code>string</code></td>
    <td>The name of the user-based subscription product.</td>
</tr>
<tr>
    <td><CopyableCode code="Settings" /></td>
    <td><code>object</code></td>
    <td>The Settings resource contains details about the registered identity provider’s product related configuration settings, such as the subnets to provision VPC endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the identity provider.</td>
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
    <td><a href="#list_identity_providers"><CopyableCode code="list_identity_providers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the Active Directory identity providers for user-based subscriptions.</td>
</tr>
<tr>
    <td><a href="#register_identity_provider"><CopyableCode code="register_identity_provider" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdentityProvider"><code>IdentityProvider</code></a></td>
    <td></td>
    <td>Registers an identity provider for user-based subscriptions.</td>
</tr>
<tr>
    <td><a href="#update_identity_provider_settings"><CopyableCode code="update_identity_provider_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UpdateSettings"><code>UpdateSettings</code></a></td>
    <td></td>
    <td>Updates additional product configuration settings for the registered identity provider.</td>
</tr>
<tr>
    <td><a href="#deregister_identity_provider"><CopyableCode code="deregister_identity_provider" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregisters the Active Directory identity provider from License Manager user-based subscriptions.</td>
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
    defaultValue="list_identity_providers"
    values={[
        { label: 'list_identity_providers', value: 'list_identity_providers' }
    ]}
>
<TabItem value="list_identity_providers">

Lists the Active Directory identity providers for user-based subscriptions.

```sql
SELECT
FailureMessage,
IdentityProvider,
IdentityProviderArn,
OwnerAccountId,
Product,
Settings,
Status
FROM aws.license_manager_user_subscriptions.identity_providers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_identity_provider"
    values={[
        { label: 'register_identity_provider', value: 'register_identity_provider' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_identity_provider">

Registers an identity provider for user-based subscriptions.

```sql
INSERT INTO aws.license_manager_user_subscriptions.identity_providers (
IdentityProvider,
Product,
Settings,
Tags,
region
)
SELECT 
'{{ IdentityProvider }}' /* required */,
'{{ Product }}',
'{{ Settings }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
IdentityProviderSummary
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: identity_providers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the identity_providers resource.
    - name: IdentityProvider
      description: |
        Refers to an identity provider.
      value:
        ActiveDirectoryIdentityProvider:
          DirectoryId: "{{ DirectoryId }}"
          ActiveDirectorySettings:
            DomainName: "{{ DomainName }}"
            DomainIpv4List:
              - "{{ DomainIpv4List }}"
            DomainIpv6List:
              - "{{ DomainIpv6List }}"
            DomainCredentialsProvider:
              SecretsManagerCredentialsProvider:
                SecretId: "{{ SecretId }}"
            DomainNetworkSettings:
              Subnets:
                - "{{ Subnets }}"
          ActiveDirectoryType: "{{ ActiveDirectoryType }}"
          IsSharedActiveDirectory: {{ IsSharedActiveDirectory }}
    - name: Product
      value: "{{ Product }}"
    - name: Settings
      description: |
        The registered identity provider’s product related configuration settings such as the subnets to provision VPC endpoints, and the security group ID that is associated with the VPC endpoints. The security group should permit inbound TCP port 1688 communication from resources in the VPC.
      value:
        Subnets:
          - "{{ Subnets }}"
        SecurityGroupId: "{{ SecurityGroupId }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_identity_provider_settings"
    values={[
        { label: 'update_identity_provider_settings', value: 'update_identity_provider_settings' }
    ]}
>
<TabItem value="update_identity_provider_settings">

Updates additional product configuration settings for the registered identity provider.

```sql
UPDATE aws.license_manager_user_subscriptions.identity_providers
SET 
IdentityProvider = '{{ IdentityProvider }}',
Product = '{{ Product }}',
IdentityProviderArn = '{{ IdentityProviderArn }}',
UpdateSettings = '{{ UpdateSettings }}'
WHERE 
region = '{{ region }}' --required
AND UpdateSettings = '{{ UpdateSettings }}' --required
RETURNING
IdentityProviderSummary;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_identity_provider"
    values={[
        { label: 'deregister_identity_provider', value: 'deregister_identity_provider' }
    ]}
>
<TabItem value="deregister_identity_provider">

Deregisters the Active Directory identity provider from License Manager user-based subscriptions.

```sql
DELETE FROM aws.license_manager_user_subscriptions.identity_providers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
