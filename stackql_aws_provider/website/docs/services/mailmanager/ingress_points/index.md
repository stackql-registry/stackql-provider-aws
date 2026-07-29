--- 
title: ingress_points
hide_title: false
hide_table_of_contents: false
keywords:
  - ingress_points
  - mailmanager
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

Creates, updates, deletes, gets or lists an <code>ingress_points</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ingress_points" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mailmanager.ingress_points" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ingress_point"
    values={[
        { label: 'get_ingress_point', value: 'get_ingress_point' },
        { label: 'list_ingress_points', value: 'list_ingress_points' }
    ]}
>
<TabItem value="get_ingress_point">

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
    <td><CopyableCode code="a_record" /></td>
    <td><code>string</code></td>
    <td>The DNS A Record that identifies your ingress endpoint. Configure your DNS Mail Exchange (MX) record with this value to route emails to Mail Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the ingress endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ingress_point_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ingress endpoint resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ingress_point_auth_configuration" /></td>
    <td><code>object</code></td>
    <td>The authentication configuration of the ingress endpoint resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ingress_point_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of an ingress endpoint resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ingress_point_name" /></td>
    <td><code>string</code></td>
    <td>A user friendly name for the ingress endpoint. (pattern: &lt;code&gt;&#91;A-Za-z0-9_\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the ingress endpoint was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="network_configuration" /></td>
    <td><code>object</code></td>
    <td>The network configuration for the ingress point.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_set_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of a rule set resource associated with the ingress endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the ingress endpoint resource. (PROVISIONING, DEPROVISIONING, UPDATING, ACTIVE, CLOSED, FAILED, ASSOCIATED_VPC_ENDPOINT_DOES_NOT_EXIST)</td>
</tr>
<tr>
    <td><CopyableCode code="tls_policy" /></td>
    <td><code>string</code></td>
    <td>The selected Transport Layer Security (TLS) policy of the ingress point. (REQUIRED, OPTIONAL, FIPS)</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_policy_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the traffic policy resource associated with the ingress endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of ingress endpoint. (OPEN, AUTH, MTLS)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ingress_points">

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
    <td><CopyableCode code="a_record" /></td>
    <td><code>string</code></td>
    <td>The DNS A Record that identifies your ingress endpoint. Configure your DNS Mail Exchange (MX) record with this value to route emails to Mail Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="ingress_point_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the ingress endpoint resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ingress_point_name" /></td>
    <td><code>string</code></td>
    <td>A user friendly name for the ingress endpoint resource. (pattern: &lt;code&gt;&#91;A-Za-z0-9_\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the ingress endpoint resource. (PROVISIONING, DEPROVISIONING, UPDATING, ACTIVE, CLOSED, FAILED, ASSOCIATED_VPC_ENDPOINT_DOES_NOT_EXIST)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of ingress endpoint resource. (OPEN, AUTH, MTLS)</td>
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
    <td><a href="#get_ingress_point"><CopyableCode code="get_ingress_point" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Fetch ingress endpoint resource attributes.</td>
</tr>
<tr>
    <td><a href="#list_ingress_points"><CopyableCode code="list_ingress_points" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all ingress endpoint resources.</td>
</tr>
<tr>
    <td><a href="#create_ingress_point"><CopyableCode code="create_ingress_point" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IngressPointName"><code>IngressPointName</code></a>, <a href="#parameter-RuleSetId"><code>RuleSetId</code></a>, <a href="#parameter-TrafficPolicyId"><code>TrafficPolicyId</code></a></td>
    <td></td>
    <td>Provision a new ingress endpoint resource.</td>
</tr>
<tr>
    <td><a href="#update_ingress_point"><CopyableCode code="update_ingress_point" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IngressPointId"><code>IngressPointId</code></a></td>
    <td></td>
    <td>Update attributes of a provisioned ingress endpoint resource.</td>
</tr>
<tr>
    <td><a href="#delete_ingress_point"><CopyableCode code="delete_ingress_point" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an ingress endpoint resource.</td>
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
    defaultValue="get_ingress_point"
    values={[
        { label: 'get_ingress_point', value: 'get_ingress_point' },
        { label: 'list_ingress_points', value: 'list_ingress_points' }
    ]}
>
<TabItem value="get_ingress_point">

Fetch ingress endpoint resource attributes.

```sql
SELECT
a_record,
created_timestamp,
ingress_point_arn,
ingress_point_auth_configuration,
ingress_point_id,
ingress_point_name,
last_updated_timestamp,
network_configuration,
rule_set_id,
status,
tls_policy,
traffic_policy_id,
type
FROM aws.mailmanager.ingress_points
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ingress_points">

List all ingress endpoint resources.

```sql
SELECT
a_record,
ingress_point_id,
ingress_point_name,
status,
type
FROM aws.mailmanager.ingress_points
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ingress_point"
    values={[
        { label: 'create_ingress_point', value: 'create_ingress_point' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ingress_point">

Provision a new ingress endpoint resource.

```sql
INSERT INTO aws.mailmanager.ingress_points (
ClientToken,
IngressPointName,
Type,
RuleSetId,
TrafficPolicyId,
IngressPointConfiguration,
NetworkConfiguration,
TlsPolicy,
Tags,
region
)
SELECT 
'{{ ClientToken }}',
'{{ IngressPointName }}' /* required */,
'{{ Type }}',
'{{ RuleSetId }}' /* required */,
'{{ TrafficPolicyId }}' /* required */,
'{{ IngressPointConfiguration }}',
'{{ NetworkConfiguration }}',
'{{ TlsPolicy }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
ingress_point_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ingress_points
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ingress_points resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique token that Amazon SES uses to recognize subsequent retries of the same request.
    - name: IngressPointName
      value: "{{ IngressPointName }}"
      description: |
        A user friendly name for an ingress endpoint resource.
    - name: Type
      value: "{{ Type }}"
      description: |
        The type of the ingress endpoint to create.
      valid_values: ['OPEN', 'AUTH', 'MTLS']
    - name: RuleSetId
      value: "{{ RuleSetId }}"
      description: |
        The identifier of an existing rule set that you attach to an ingress endpoint resource.
    - name: TrafficPolicyId
      value: "{{ TrafficPolicyId }}"
      description: |
        The identifier of an existing traffic policy that you attach to an ingress endpoint resource.
    - name: IngressPointConfiguration
      description: |
        If you choose an Authenticated ingress endpoint, you must configure either an SMTP password or a secret ARN.
      value:
        SmtpPassword: "{{ SmtpPassword }}"
        SecretArn: "{{ SecretArn }}"
        TlsAuthConfiguration:
          TrustStore:
            CAContent: "{{ CAContent }}"
            CrlContent: "{{ CrlContent }}"
            KmsKeyArn: "{{ KmsKeyArn }}"
    - name: NetworkConfiguration
      description: |
        Specifies the network configuration for the ingress point. This allows you to create an IPv4-only, Dual-Stack, or PrivateLink type of ingress point. If not specified, the default network type is IPv4-only.
      value:
        PublicNetworkConfiguration:
          IpType: "{{ IpType }}"
        PrivateNetworkConfiguration:
          VpcEndpointId: "{{ VpcEndpointId }}"
    - name: TlsPolicy
      value: "{{ TlsPolicy }}"
      description: |
        The Transport Layer Security (TLS) policy for the ingress point. The FIPS value is only valid in US and Canada regions.
      valid_values: ['REQUIRED', 'OPTIONAL', 'FIPS']
    - name: Tags
      description: |
        The tags used to organize, track, or control access for the resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ingress_point"
    values={[
        { label: 'update_ingress_point', value: 'update_ingress_point' }
    ]}
>
<TabItem value="update_ingress_point">

Update attributes of a provisioned ingress endpoint resource.

```sql
UPDATE aws.mailmanager.ingress_points
SET 
IngressPointId = '{{ IngressPointId }}',
IngressPointName = '{{ IngressPointName }}',
StatusToUpdate = '{{ StatusToUpdate }}',
RuleSetId = '{{ RuleSetId }}',
TrafficPolicyId = '{{ TrafficPolicyId }}',
IngressPointConfiguration = '{{ IngressPointConfiguration }}',
TlsPolicy = '{{ TlsPolicy }}'
WHERE 
region = '{{ region }}' --required
AND IngressPointId = '{{ IngressPointId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ingress_point"
    values={[
        { label: 'delete_ingress_point', value: 'delete_ingress_point' }
    ]}
>
<TabItem value="delete_ingress_point">

Delete an ingress endpoint resource.

```sql
DELETE FROM aws.mailmanager.ingress_points
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
