--- 
title: tls_inspection_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - tls_inspection_configurations
  - network_firewall
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

Creates, updates, deletes, gets or lists a <code>tls_inspection_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tls_inspection_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.network_firewall.tls_inspection_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_tls_inspection_configuration"
    values={[
        { label: 'describe_tls_inspection_configuration', value: 'describe_tls_inspection_configuration' }
    ]}
>
<TabItem value="describe_tls_inspection_configuration">

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
    <td><CopyableCode code="TLSInspectionConfiguration" /></td>
    <td><code>object</code></td>
    <td>The object that defines a TLS inspection configuration. This, along with TLSInspectionConfigurationResponse, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling DescribeTLSInspectionConfiguration. Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination. To use a TLS inspection configuration, you add it to a new Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect the traffic traveling through your firewalls. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see Inspecting SSL/TLS traffic with TLS inspection configurations in the Network Firewall Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="TLSInspectionConfigurationResponse" /></td>
    <td><code>object</code></td>
    <td>The high-level properties of a TLS inspection configuration. This, along with the TLSInspectionConfiguration, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling DescribeTLSInspectionConfiguration.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateToken" /></td>
    <td><code>string</code></td>
    <td>A token used for optimistic locking. Network Firewall returns a token to your requests that access the TLS inspection configuration. The token marks the state of the TLS inspection configuration resource at the time of the request. To make changes to the TLS inspection configuration, you provide the token in your request. Network Firewall uses the token to ensure that the TLS inspection configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the TLS inspection configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. (pattern: &lt;code&gt;^(&#91;0-9a-f&#93;&#123;8&#125;)-(&#91;0-9a-f&#93;&#123;4&#125;-)&#123;3&#125;(&#91;0-9a-f&#93;&#123;12&#125;)$&lt;/code&gt;)</td>
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
    <td><a href="#describe_tls_inspection_configuration"><CopyableCode code="describe_tls_inspection_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the data objects for the specified TLS inspection configuration.</td>
</tr>
<tr>
    <td><a href="#create_tls_inspection_configuration"><CopyableCode code="create_tls_inspection_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TLSInspectionConfigurationName"><code>TLSInspectionConfigurationName</code></a>, <a href="#parameter-TLSInspectionConfiguration"><code>TLSInspectionConfiguration</code></a></td>
    <td></td>
    <td>Creates an Network Firewall TLS inspection configuration. Network Firewall uses TLS inspection configurations to decrypt your firewall's inbound and outbound SSL/TLS traffic. After decryption, Network Firewall inspects the traffic according to your firewall policy's stateful rules, and then re-encrypts it before sending it to its destination. You can enable inspection of your firewall's inbound traffic, outbound traffic, or both. To use TLS inspection with your firewall, you must first import or provision certificates using ACM, create a TLS inspection configuration, add that configuration to a new firewall policy, and then associate that policy with your firewall. To update the settings for a TLS inspection configuration, use UpdateTLSInspectionConfiguration. To manage a TLS inspection configuration's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource. To retrieve information about TLS inspection configurations, use ListTLSInspectionConfigurations and DescribeTLSInspectionConfiguration. For more information about TLS inspection configurations, see Inspecting SSL/TLS traffic with TLS inspection configurations in the Network Firewall Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_tls_inspection_configuration"><CopyableCode code="update_tls_inspection_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TLSInspectionConfiguration"><code>TLSInspectionConfiguration</code></a>, <a href="#parameter-UpdateToken"><code>UpdateToken</code></a></td>
    <td></td>
    <td>Updates the TLS inspection configuration settings for the specified TLS inspection configuration. You use a TLS inspection configuration by referencing it in one or more firewall policies. When you modify a TLS inspection configuration, you modify all firewall policies that use the TLS inspection configuration. To update a TLS inspection configuration, first call DescribeTLSInspectionConfiguration to retrieve the current TLSInspectionConfiguration object, update the object as needed, and then provide the updated object to this call.</td>
</tr>
<tr>
    <td><a href="#delete_tls_inspection_configuration"><CopyableCode code="delete_tls_inspection_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified TLSInspectionConfiguration.</td>
</tr>
<tr>
    <td><a href="#list_tls_inspection_configurations"><CopyableCode code="list_tls_inspection_configurations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the metadata for the TLS inspection configurations that you have defined. Depending on your setting for max results and the number of TLS inspection configurations, a single call might not return the full list.</td>
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
    defaultValue="describe_tls_inspection_configuration"
    values={[
        { label: 'describe_tls_inspection_configuration', value: 'describe_tls_inspection_configuration' }
    ]}
>
<TabItem value="describe_tls_inspection_configuration">

Returns the data objects for the specified TLS inspection configuration.

```sql
SELECT
TLSInspectionConfiguration,
TLSInspectionConfigurationResponse,
UpdateToken
FROM aws.network_firewall.tls_inspection_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tls_inspection_configuration"
    values={[
        { label: 'create_tls_inspection_configuration', value: 'create_tls_inspection_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tls_inspection_configuration">

Creates an Network Firewall TLS inspection configuration. Network Firewall uses TLS inspection configurations to decrypt your firewall's inbound and outbound SSL/TLS traffic. After decryption, Network Firewall inspects the traffic according to your firewall policy's stateful rules, and then re-encrypts it before sending it to its destination. You can enable inspection of your firewall's inbound traffic, outbound traffic, or both. To use TLS inspection with your firewall, you must first import or provision certificates using ACM, create a TLS inspection configuration, add that configuration to a new firewall policy, and then associate that policy with your firewall. To update the settings for a TLS inspection configuration, use UpdateTLSInspectionConfiguration. To manage a TLS inspection configuration's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource. To retrieve information about TLS inspection configurations, use ListTLSInspectionConfigurations and DescribeTLSInspectionConfiguration. For more information about TLS inspection configurations, see Inspecting SSL/TLS traffic with TLS inspection configurations in the Network Firewall Developer Guide.

```sql
INSERT INTO aws.network_firewall.tls_inspection_configurations (
TLSInspectionConfigurationName,
TLSInspectionConfiguration,
Description,
Tags,
EncryptionConfiguration,
region
)
SELECT 
'{{ TLSInspectionConfigurationName }}' /* required */,
'{{ TLSInspectionConfiguration }}' /* required */,
'{{ Description }}',
'{{ Tags }}',
'{{ EncryptionConfiguration }}',
'{{ region }}'
RETURNING
TLSInspectionConfigurationResponse,
UpdateToken
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tls_inspection_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tls_inspection_configurations resource.
    - name: TLSInspectionConfigurationName
      value: "{{ TLSInspectionConfigurationName }}"
      description: |
        The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it.
    - name: TLSInspectionConfiguration
      description: |
        The object that defines a TLS inspection configuration. This, along with TLSInspectionConfigurationResponse, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling DescribeTLSInspectionConfiguration. Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination. To use a TLS inspection configuration, you add it to a new Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect the traffic traveling through your firewalls. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see Inspecting SSL/TLS traffic with TLS inspection configurations in the Network Firewall Developer Guide.
      value:
        ServerCertificateConfigurations:
          - ServerCertificates: "{{ ServerCertificates }}"
            Scopes: "{{ Scopes }}"
            CertificateAuthorityArn: "{{ CertificateAuthorityArn }}"
            CheckCertificateRevocationStatus:
              RevokedStatusAction: "{{ RevokedStatusAction }}"
              UnknownStatusAction: "{{ UnknownStatusAction }}"
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the TLS inspection configuration.
    - name: Tags
      description: |
        The key:value pairs to associate with the resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: EncryptionConfiguration
      description: |
        A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see Encryption at rest with Amazon Web Services Key Managment Service in the Network Firewall Developer Guide.
      value:
        KeyId: "{{ KeyId }}"
        Type: "{{ Type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_tls_inspection_configuration"
    values={[
        { label: 'update_tls_inspection_configuration', value: 'update_tls_inspection_configuration' }
    ]}
>
<TabItem value="update_tls_inspection_configuration">

Updates the TLS inspection configuration settings for the specified TLS inspection configuration. You use a TLS inspection configuration by referencing it in one or more firewall policies. When you modify a TLS inspection configuration, you modify all firewall policies that use the TLS inspection configuration. To update a TLS inspection configuration, first call DescribeTLSInspectionConfiguration to retrieve the current TLSInspectionConfiguration object, update the object as needed, and then provide the updated object to this call.

```sql
UPDATE aws.network_firewall.tls_inspection_configurations
SET 
TLSInspectionConfigurationArn = '{{ TLSInspectionConfigurationArn }}',
TLSInspectionConfigurationName = '{{ TLSInspectionConfigurationName }}',
TLSInspectionConfiguration = '{{ TLSInspectionConfiguration }}',
Description = '{{ Description }}',
EncryptionConfiguration = '{{ EncryptionConfiguration }}',
UpdateToken = '{{ UpdateToken }}'
WHERE 
region = '{{ region }}' --required
AND TLSInspectionConfiguration = '{{ TLSInspectionConfiguration }}' --required
AND UpdateToken = '{{ UpdateToken }}' --required
RETURNING
TLSInspectionConfigurationResponse,
UpdateToken;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tls_inspection_configuration"
    values={[
        { label: 'delete_tls_inspection_configuration', value: 'delete_tls_inspection_configuration' }
    ]}
>
<TabItem value="delete_tls_inspection_configuration">

Deletes the specified TLSInspectionConfiguration.

```sql
DELETE FROM aws.network_firewall.tls_inspection_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_tls_inspection_configurations"
    values={[
        { label: 'list_tls_inspection_configurations', value: 'list_tls_inspection_configurations' }
    ]}
>
<TabItem value="list_tls_inspection_configurations">

Retrieves the metadata for the TLS inspection configurations that you have defined. Depending on your setting for max results and the number of TLS inspection configurations, a single call might not return the full list.

```sql
EXEC aws.network_firewall.tls_inspection_configurations.list_tls_inspection_configurations 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
</Tabs>
