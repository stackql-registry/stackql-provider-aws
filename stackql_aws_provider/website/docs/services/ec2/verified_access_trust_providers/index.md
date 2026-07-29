--- 
title: verified_access_trust_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - verified_access_trust_providers
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

Creates, updates, deletes, gets or lists a <code>verified_access_trust_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="verified_access_trust_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.verified_access_trust_providers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_verified_access_trust_providers"
    values={[
        { label: 'describe_verified_access_trust_providers', value: 'describe_verified_access_trust_providers' }
    ]}
>
<TabItem value="describe_verified_access_trust_providers">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description for the Amazon Web Services Verified Access trust provider.</td>
</tr>
<tr>
    <td><CopyableCode code="device_options" /></td>
    <td><code>string</code></td>
    <td>The options for device-identity trust provider.</td>
</tr>
<tr>
    <td><CopyableCode code="device_trust_provider_type" /></td>
    <td><code>string</code></td>
    <td>The type of device-based trust provider.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string</code></td>
    <td>The last updated time.</td>
</tr>
<tr>
    <td><CopyableCode code="native_application_oidc_options" /></td>
    <td><code>string</code></td>
    <td>The OpenID Connect (OIDC) options.</td>
</tr>
<tr>
    <td><CopyableCode code="oidc_options" /></td>
    <td><code>string</code></td>
    <td>The options for an OpenID Connect-compatible user-identity trust provider.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_reference_name" /></td>
    <td><code>string</code></td>
    <td>The identifier to be used when working with policy rules.</td>
</tr>
<tr>
    <td><CopyableCode code="sse_specification" /></td>
    <td><code>string</code></td>
    <td>The options in use for server side encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags.</td>
</tr>
<tr>
    <td><CopyableCode code="trust_provider_type" /></td>
    <td><code>string</code></td>
    <td>The type of Verified Access trust provider.</td>
</tr>
<tr>
    <td><CopyableCode code="user_trust_provider_type" /></td>
    <td><code>string</code></td>
    <td>The type of user-based trust provider.</td>
</tr>
<tr>
    <td><CopyableCode code="verified_access_trust_provider_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services Verified Access trust provider.</td>
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
    <td><a href="#describe_verified_access_trust_providers"><CopyableCode code="describe_verified_access_trust_providers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-VerifiedAccessTrustProviderId"><code>VerifiedAccessTrustProviderId</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the specified Amazon Web Services Verified Access trust providers.</td>
</tr>
<tr>
    <td><a href="#create_verified_access_trust_provider"><CopyableCode code="create_verified_access_trust_provider" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-TrustProviderType"><code>TrustProviderType</code></a>, <a href="#parameter-PolicyReferenceName"><code>PolicyReferenceName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UserTrustProviderType"><code>UserTrustProviderType</code></a>, <a href="#parameter-DeviceTrustProviderType"><code>DeviceTrustProviderType</code></a>, <a href="#parameter-OidcOptions"><code>OidcOptions</code></a>, <a href="#parameter-DeviceOptions"><code>DeviceOptions</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-SseSpecification"><code>SseSpecification</code></a>, <a href="#parameter-NativeApplicationOidcOptions"><code>NativeApplicationOidcOptions</code></a></td>
    <td>A trust provider is a third-party entity that creates, maintains, and manages identity information for users and devices. When an application request is made, the identity information sent by the trust provider is evaluated by Verified Access before allowing or denying the application request.</td>
</tr>
<tr>
    <td><a href="#attach_verified_access_trust_provider"><CopyableCode code="attach_verified_access_trust_provider" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-VerifiedAccessInstanceId"><code>VerifiedAccessInstanceId</code></a>, <a href="#parameter-VerifiedAccessTrustProviderId"><code>VerifiedAccessTrustProviderId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Attaches the specified Amazon Web Services Verified Access trust provider to the specified Amazon Web Services Verified Access instance.</td>
</tr>
<tr>
    <td><a href="#modify_verified_access_trust_provider"><CopyableCode code="modify_verified_access_trust_provider" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-VerifiedAccessTrustProviderId"><code>VerifiedAccessTrustProviderId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-OidcOptions"><code>OidcOptions</code></a>, <a href="#parameter-DeviceOptions"><code>DeviceOptions</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-SseSpecification"><code>SseSpecification</code></a>, <a href="#parameter-NativeApplicationOidcOptions"><code>NativeApplicationOidcOptions</code></a></td>
    <td>Modifies the configuration of the specified Amazon Web Services Verified Access trust provider.</td>
</tr>
<tr>
    <td><a href="#delete_verified_access_trust_provider"><CopyableCode code="delete_verified_access_trust_provider" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-VerifiedAccessTrustProviderId"><code>VerifiedAccessTrustProviderId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Delete an Amazon Web Services Verified Access trust provider.</td>
</tr>
<tr>
    <td><a href="#detach_verified_access_trust_provider"><CopyableCode code="detach_verified_access_trust_provider" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-VerifiedAccessInstanceId"><code>VerifiedAccessInstanceId</code></a>, <a href="#parameter-VerifiedAccessTrustProviderId"><code>VerifiedAccessTrustProviderId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Detaches the specified Amazon Web Services Verified Access trust provider from the specified Amazon Web Services Verified Access instance.</td>
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
<tr id="parameter-PolicyReferenceName">
    <td><CopyableCode code="PolicyReferenceName" /></td>
    <td><code>string</code></td>
    <td>The identifier to be used when working with policy rules.</td>
</tr>
<tr id="parameter-TrustProviderType">
    <td><CopyableCode code="TrustProviderType" /></td>
    <td><code>string</code></td>
    <td>The type of trust provider.</td>
</tr>
<tr id="parameter-VerifiedAccessInstanceId">
    <td><CopyableCode code="VerifiedAccessInstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Verified Access instance.</td>
</tr>
<tr id="parameter-VerifiedAccessTrustProviderId">
    <td><CopyableCode code="VerifiedAccessTrustProviderId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Verified Access trust provider.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description for the Verified Access trust provider.</td>
</tr>
<tr id="parameter-DeviceOptions">
    <td><CopyableCode code="DeviceOptions" /></td>
    <td><code>object</code></td>
    <td>The options for a device-based trust provider. This parameter is required when the provider type is device.</td>
</tr>
<tr id="parameter-DeviceTrustProviderType">
    <td><CopyableCode code="DeviceTrustProviderType" /></td>
    <td><code>string</code></td>
    <td>The type of device-based trust provider. This parameter is required when the provider type is device.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. Filter names and values are case-sensitive.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NativeApplicationOidcOptions">
    <td><CopyableCode code="NativeApplicationOidcOptions" /></td>
    <td><code>object</code></td>
    <td>The OpenID Connect (OIDC) options.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-OidcOptions">
    <td><CopyableCode code="OidcOptions" /></td>
    <td><code>object</code></td>
    <td>The options for an OpenID Connect-compatible user-identity trust provider.</td>
</tr>
<tr id="parameter-SseSpecification">
    <td><CopyableCode code="SseSpecification" /></td>
    <td><code>object</code></td>
    <td>The options for server side encryption.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the Verified Access trust provider.</td>
</tr>
<tr id="parameter-UserTrustProviderType">
    <td><CopyableCode code="UserTrustProviderType" /></td>
    <td><code>string</code></td>
    <td>The type of user-based trust provider. This parameter is required when the provider type is user.</td>
</tr>
<tr id="parameter-VerifiedAccessTrustProviderId">
    <td><CopyableCode code="VerifiedAccessTrustProviderId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the Verified Access trust providers.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_verified_access_trust_providers"
    values={[
        { label: 'describe_verified_access_trust_providers', value: 'describe_verified_access_trust_providers' }
    ]}
>
<TabItem value="describe_verified_access_trust_providers">

Describes the specified Amazon Web Services Verified Access trust providers.

```sql
SELECT
creation_time,
description,
device_options,
device_trust_provider_type,
last_updated_time,
native_application_oidc_options,
oidc_options,
policy_reference_name,
sse_specification,
tags,
trust_provider_type,
user_trust_provider_type,
verified_access_trust_provider_id
FROM aws.ec2.verified_access_trust_providers
WHERE region = '{{ region }}' -- required
AND VerifiedAccessTrustProviderId = '{{ VerifiedAccessTrustProviderId }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND Filter = '{{ Filter }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_verified_access_trust_provider"
    values={[
        { label: 'create_verified_access_trust_provider', value: 'create_verified_access_trust_provider' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_verified_access_trust_provider">

A trust provider is a third-party entity that creates, maintains, and manages identity information for users and devices. When an application request is made, the identity information sent by the trust provider is evaluated by Verified Access before allowing or denying the application request.

```sql
INSERT INTO aws.ec2.verified_access_trust_providers (
TrustProviderType,
PolicyReferenceName,
region,
UserTrustProviderType,
DeviceTrustProviderType,
OidcOptions,
DeviceOptions,
Description,
TagSpecification,
ClientToken,
DryRun,
SseSpecification,
NativeApplicationOidcOptions
)
SELECT 
'{{ TrustProviderType }}',
'{{ PolicyReferenceName }}',
'{{ region }}',
'{{ UserTrustProviderType }}',
'{{ DeviceTrustProviderType }}',
'{{ OidcOptions }}',
'{{ DeviceOptions }}',
'{{ Description }}',
'{{ TagSpecification }}',
'{{ ClientToken }}',
'{{ DryRun }}',
'{{ SseSpecification }}',
'{{ NativeApplicationOidcOptions }}'
RETURNING
creation_time,
description,
device_options,
device_trust_provider_type,
last_updated_time,
native_application_oidc_options,
oidc_options,
policy_reference_name,
sse_specification,
tags,
trust_provider_type,
user_trust_provider_type,
verified_access_trust_provider_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: verified_access_trust_providers
  props:
    - name: TrustProviderType
      value: "{{ TrustProviderType }}"
      description: Required parameter for the verified_access_trust_providers resource.
    - name: PolicyReferenceName
      value: "{{ PolicyReferenceName }}"
      description: Required parameter for the verified_access_trust_providers resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the verified_access_trust_providers resource.
    - name: UserTrustProviderType
      value: "{{ UserTrustProviderType }}"
      description: The type of user-based trust provider. This parameter is required when the provider type is user.
      description: The type of user-based trust provider. This parameter is required when the provider type is user.
    - name: DeviceTrustProviderType
      value: "{{ DeviceTrustProviderType }}"
      description: The type of device-based trust provider. This parameter is required when the provider type is device.
      description: The type of device-based trust provider. This parameter is required when the provider type is device.
    - name: OidcOptions
      value: "{{ OidcOptions }}"
      description: The options for a OpenID Connect-compatible user-identity trust provider. This parameter is required when the provider type is user.
      description: The options for a OpenID Connect-compatible user-identity trust provider. This parameter is required when the provider type is user.
    - name: DeviceOptions
      value: "{{ DeviceOptions }}"
      description: The options for a device-based trust provider. This parameter is required when the provider type is device.
      description: The options for a device-based trust provider. This parameter is required when the provider type is device.
    - name: Description
      value: "{{ Description }}"
      description: A description for the Verified Access trust provider.
      description: A description for the Verified Access trust provider.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to the Verified Access trust provider.
      description: The tags to assign to the Verified Access trust provider.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see Ensuring idempotency.
      description: A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see Ensuring idempotency.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: SseSpecification
      value: "{{ SseSpecification }}"
      description: The options for server side encryption.
      description: The options for server side encryption.
    - name: NativeApplicationOidcOptions
      value: "{{ NativeApplicationOidcOptions }}"
      description: The OpenID Connect (OIDC) options.
      description: The OpenID Connect (OIDC) options.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_verified_access_trust_provider"
    values={[
        { label: 'attach_verified_access_trust_provider', value: 'attach_verified_access_trust_provider' },
        { label: 'modify_verified_access_trust_provider', value: 'modify_verified_access_trust_provider' }
    ]}
>
<TabItem value="attach_verified_access_trust_provider">

Attaches the specified Amazon Web Services Verified Access trust provider to the specified Amazon Web Services Verified Access instance.

```sql
UPDATE aws.ec2.verified_access_trust_providers
SET 
-- No updatable properties
WHERE 
VerifiedAccessInstanceId = '{{ VerifiedAccessInstanceId }}' --required
AND VerifiedAccessTrustProviderId = '{{ VerifiedAccessTrustProviderId }}' --required
AND region = '{{ region }}' --required
AND ClientToken = '{{ ClientToken}}'
AND DryRun = {{ DryRun}}
RETURNING
creation_time,
description,
device_options,
device_trust_provider_type,
last_updated_time,
native_application_oidc_options,
oidc_options,
policy_reference_name,
sse_specification,
tags,
trust_provider_type,
user_trust_provider_type,
verified_access_trust_provider_id;
```
</TabItem>
<TabItem value="modify_verified_access_trust_provider">

Modifies the configuration of the specified Amazon Web Services Verified Access trust provider.

```sql
UPDATE aws.ec2.verified_access_trust_providers
SET 
-- No updatable properties
WHERE 
VerifiedAccessTrustProviderId = '{{ VerifiedAccessTrustProviderId }}' --required
AND region = '{{ region }}' --required
AND OidcOptions = '{{ OidcOptions}}'
AND DeviceOptions = '{{ DeviceOptions}}'
AND Description = '{{ Description}}'
AND DryRun = {{ DryRun}}
AND ClientToken = '{{ ClientToken}}'
AND SseSpecification = '{{ SseSpecification}}'
AND NativeApplicationOidcOptions = '{{ NativeApplicationOidcOptions}}'
RETURNING
creation_time,
description,
device_options,
device_trust_provider_type,
last_updated_time,
native_application_oidc_options,
oidc_options,
policy_reference_name,
sse_specification,
tags,
trust_provider_type,
user_trust_provider_type,
verified_access_trust_provider_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_verified_access_trust_provider"
    values={[
        { label: 'delete_verified_access_trust_provider', value: 'delete_verified_access_trust_provider' }
    ]}
>
<TabItem value="delete_verified_access_trust_provider">

Delete an Amazon Web Services Verified Access trust provider.

```sql
DELETE FROM aws.ec2.verified_access_trust_providers
WHERE VerifiedAccessTrustProviderId = '{{ VerifiedAccessTrustProviderId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
AND ClientToken = '{{ ClientToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="detach_verified_access_trust_provider"
    values={[
        { label: 'detach_verified_access_trust_provider', value: 'detach_verified_access_trust_provider' }
    ]}
>
<TabItem value="detach_verified_access_trust_provider">

Detaches the specified Amazon Web Services Verified Access trust provider from the specified Amazon Web Services Verified Access instance.

```sql
EXEC aws.ec2.verified_access_trust_providers.detach_verified_access_trust_provider 
@VerifiedAccessInstanceId='{{ VerifiedAccessInstanceId }}' --required, 
@VerifiedAccessTrustProviderId='{{ VerifiedAccessTrustProviderId }}' --required, 
@region='{{ region }}' --required, 
@ClientToken='{{ ClientToken }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
