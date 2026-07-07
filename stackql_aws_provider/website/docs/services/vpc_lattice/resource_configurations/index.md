--- 
title: resource_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_configurations
  - vpc_lattice
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

Creates, updates, deletes, gets or lists a <code>resource_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.vpc_lattice.resource_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_configuration"
    values={[
        { label: 'get_resource_configuration', value: 'get_resource_configuration' },
        { label: 'list_resource_configurations', value: 'list_resource_configurations' }
    ]}
>
<TabItem value="get_resource_configuration">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource configuration. (pattern: &lt;code&gt;rcfg-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource configuration. (pattern: &lt;code&gt;(?!rcfg-)(?!&#91;-&#93;)(?!.*&#91;-&#93;$)(?!.*&#91;-&#93;&#123;2&#125;)&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="allowAssociationToShareableServiceNetwork" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the resource configuration is associated with a sharable service network.</td>
</tr>
<tr>
    <td><CopyableCode code="amazonManaged" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the resource configuration was created and is managed by Amazon.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource configuration. (pattern: &lt;code&gt;arn:&#91;a-z0-9f\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:resourceconfiguration/rcfg-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the resource configuration was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="customDomainName" /></td>
    <td><code>string</code></td>
    <td>The custom domain name of the resource configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="domainVerificationArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the domain verification. (pattern: &lt;code&gt;arn:&#91;a-z0-9f\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:domainverification/dv-&#91;a-fA-F0-9&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domainVerificationId" /></td>
    <td><code>string</code></td>
    <td>The domain verification ID. (pattern: &lt;code&gt;dv-&#91;a-fA-F0-9&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domainVerificationStatus" /></td>
    <td><code>string</code></td>
    <td>The domain verification status. (VERIFIED, PENDING, VERIFICATION_TIMED_OUT)</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>string</code></td>
    <td>The reason the create-resource-configuration request failed.</td>
</tr>
<tr>
    <td><CopyableCode code="groupDomain" /></td>
    <td><code>string</code></td>
    <td>(GROUP) The group domain for a group resource configuration. Any domains that you create for the child resource are subdomains of the group domain. Child resources inherit the verification status of the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent date and time that the resource configuration was updated, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="portRanges" /></td>
    <td><code>array</code></td>
    <td>The TCP port ranges that a consumer can use to access a resource configuration. You can separate port ranges with a comma. Example: 1-65535 or 1,2,22-30</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The TCP protocol accepted by the specified resource configuration. (TCP)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceConfigurationDefinition" /></td>
    <td><code>object</code></td>
    <td>Describes a resource configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceConfigurationGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the group resource configuration. (pattern: &lt;code&gt;rcfg-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource gateway used to connect to the resource configuration in a given VPC. You can specify the resource gateway identifier only for resource configurations with type SINGLE, GROUP, or ARN. (pattern: &lt;code&gt;rgw-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the resource configuration. (ACTIVE, CREATE_IN_PROGRESS, UPDATE_IN_PROGRESS, DELETE_IN_PROGRESS, CREATE_FAILED, UPDATE_FAILED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of resource configuration. SINGLE - A single resource. GROUP - A group of resources. CHILD - A single resource that is part of a group resource configuration. ARN - An Amazon Web Services resource. (GROUP, CHILD, SINGLE, ARN)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_resource_configurations">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource configuration. (pattern: &lt;code&gt;rcfg-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource configuration. (pattern: &lt;code&gt;(?!rcfg-)(?!&#91;-&#93;)(?!.*&#91;-&#93;$)(?!.*&#91;-&#93;&#123;2&#125;)&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="amazonManaged" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the resource configuration was created and is managed by Amazon.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource configuration. (pattern: &lt;code&gt;arn:&#91;a-z0-9f\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:resourceconfiguration/rcfg-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the resource configuration was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="customDomainName" /></td>
    <td><code>string</code></td>
    <td>The custom domain name.</td>
</tr>
<tr>
    <td><CopyableCode code="domainVerificationId" /></td>
    <td><code>string</code></td>
    <td>The domain verification ID. (pattern: &lt;code&gt;dv-&#91;a-fA-F0-9&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="groupDomain" /></td>
    <td><code>string</code></td>
    <td>(GROUP) The group domain for a group resource configuration. Any domains that you create for the child resource are subdomains of the group domain. Child resources inherit the verification status of the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent date and time that the resource configuration was updated, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceConfigurationGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the group resource configuration. (pattern: &lt;code&gt;rcfg-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource gateway. (pattern: &lt;code&gt;rgw-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the resource configuration. (ACTIVE, CREATE_IN_PROGRESS, UPDATE_IN_PROGRESS, DELETE_IN_PROGRESS, CREATE_FAILED, UPDATE_FAILED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of resource configuration. SINGLE - A single resource. GROUP - A group of resources. You must create a group resource configuration before you create a child resource configuration. CHILD - A single resource that is part of a group resource configuration. ARN - An Amazon Web Services resource. (GROUP, CHILD, SINGLE, ARN)</td>
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
    <td><a href="#get_resource_configuration"><CopyableCode code="get_resource_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_configuration_identifier"><code>resource_configuration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified resource configuration.</td>
</tr>
<tr>
    <td><a href="#list_resource_configurations"><CopyableCode code="list_resource_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-resourceGatewayIdentifier"><code>resourceGatewayIdentifier</code></a>, <a href="#parameter-resourceConfigurationGroupIdentifier"><code>resourceConfigurationGroupIdentifier</code></a>, <a href="#parameter-domainVerificationIdentifier"><code>domainVerificationIdentifier</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the resource configurations owned by or shared with this account.</td>
</tr>
<tr>
    <td><a href="#create_resource_configuration"><CopyableCode code="create_resource_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Creates a resource configuration. A resource configuration defines a specific resource. You can associate a resource configuration with a service network or a VPC endpoint.</td>
</tr>
<tr>
    <td><a href="#update_resource_configuration"><CopyableCode code="update_resource_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_configuration_identifier"><code>resource_configuration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified resource configuration.</td>
</tr>
<tr>
    <td><a href="#delete_resource_configuration"><CopyableCode code="delete_resource_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-resource_configuration_identifier"><code>resource_configuration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified resource configuration.</td>
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
<tr id="parameter-resource_configuration_identifier">
    <td><CopyableCode code="resource_configuration_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the resource configuration.</td>
</tr>
<tr id="parameter-domainVerificationIdentifier">
    <td><CopyableCode code="domainVerificationIdentifier" /></td>
    <td><code>string</code></td>
    <td>The domain verification ID.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum page size.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token for the next page of results.</td>
</tr>
<tr id="parameter-resourceConfigurationGroupIdentifier">
    <td><CopyableCode code="resourceConfigurationGroupIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource configuration of type Group.</td>
</tr>
<tr id="parameter-resourceGatewayIdentifier">
    <td><CopyableCode code="resourceGatewayIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource gateway for the resource configuration.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_resource_configuration"
    values={[
        { label: 'get_resource_configuration', value: 'get_resource_configuration' },
        { label: 'list_resource_configurations', value: 'list_resource_configurations' }
    ]}
>
<TabItem value="get_resource_configuration">

Retrieves information about the specified resource configuration.

```sql
SELECT
id,
name,
allowAssociationToShareableServiceNetwork,
amazonManaged,
arn,
createdAt,
customDomainName,
domainVerificationArn,
domainVerificationId,
domainVerificationStatus,
failureReason,
groupDomain,
lastUpdatedAt,
portRanges,
protocol,
resourceConfigurationDefinition,
resourceConfigurationGroupId,
resourceGatewayId,
status,
type_
FROM aws.vpc_lattice.resource_configurations
WHERE resource_configuration_identifier = '{{ resource_configuration_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_resource_configurations">

Lists the resource configurations owned by or shared with this account.

```sql
SELECT
id,
name,
amazonManaged,
arn,
createdAt,
customDomainName,
domainVerificationId,
groupDomain,
lastUpdatedAt,
resourceConfigurationGroupId,
resourceGatewayId,
status,
type_
FROM aws.vpc_lattice.resource_configurations
WHERE region = '{{ region }}' -- required
AND resourceGatewayIdentifier = '{{ resourceGatewayIdentifier }}'
AND resourceConfigurationGroupIdentifier = '{{ resourceConfigurationGroupIdentifier }}'
AND domainVerificationIdentifier = '{{ domainVerificationIdentifier }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_resource_configuration"
    values={[
        { label: 'create_resource_configuration', value: 'create_resource_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_resource_configuration">

Creates a resource configuration. A resource configuration defines a specific resource. You can associate a resource configuration with a service network or a VPC endpoint.

```sql
INSERT INTO aws.vpc_lattice.resource_configurations (
name,
type,
portRanges,
protocol,
resourceGatewayIdentifier,
resourceConfigurationGroupIdentifier,
resourceConfigurationDefinition,
allowAssociationToShareableServiceNetwork,
customDomainName,
groupDomain,
domainVerificationIdentifier,
clientToken,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ type }}' /* required */,
'{{ portRanges }}',
'{{ protocol }}',
'{{ resourceGatewayIdentifier }}',
'{{ resourceConfigurationGroupIdentifier }}',
'{{ resourceConfigurationDefinition }}',
{{ allowAssociationToShareableServiceNetwork }},
'{{ customDomainName }}',
'{{ groupDomain }}',
'{{ domainVerificationIdentifier }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
id,
name,
allowAssociationToShareableServiceNetwork,
arn,
createdAt,
customDomainName,
domainVerificationArn,
domainVerificationId,
failureReason,
groupDomain,
portRanges,
protocol,
resourceConfigurationDefinition,
resourceConfigurationGroupId,
resourceGatewayId,
status,
type_
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resource_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resource_configurations resource.
    - name: name
      value: "{{ name }}"
    - name: type
      value: "{{ type }}"
      valid_values: ['GROUP', 'CHILD', 'SINGLE', 'ARN']
    - name: portRanges
      value:
        - "{{ portRanges }}"
    - name: protocol
      value: "{{ protocol }}"
      valid_values: ['TCP']
    - name: resourceGatewayIdentifier
      value: "{{ resourceGatewayIdentifier }}"
    - name: resourceConfigurationGroupIdentifier
      value: "{{ resourceConfigurationGroupIdentifier }}"
    - name: resourceConfigurationDefinition
      description: |
        Describes a resource configuration.
      value:
        dnsResource:
          domainName: "{{ domainName }}"
          ipAddressType: "{{ ipAddressType }}"
        ipResource:
          ipAddress: "{{ ipAddress }}"
        arnResource:
          arn: "{{ arn }}"
    - name: allowAssociationToShareableServiceNetwork
      value: {{ allowAssociationToShareableServiceNetwork }}
    - name: customDomainName
      value: "{{ customDomainName }}"
    - name: groupDomain
      value: "{{ groupDomain }}"
    - name: domainVerificationIdentifier
      value: "{{ domainVerificationIdentifier }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_resource_configuration"
    values={[
        { label: 'update_resource_configuration', value: 'update_resource_configuration' }
    ]}
>
<TabItem value="update_resource_configuration">

Updates the specified resource configuration.

```sql
UPDATE aws.vpc_lattice.resource_configurations
SET 
resourceConfigurationDefinition = '{{ resourceConfigurationDefinition }}',
allowAssociationToShareableServiceNetwork = {{ allowAssociationToShareableServiceNetwork }},
portRanges = '{{ portRanges }}'
WHERE 
resource_configuration_identifier = '{{ resource_configuration_identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
allowAssociationToShareableServiceNetwork,
arn,
portRanges,
protocol,
resourceConfigurationDefinition,
resourceConfigurationGroupId,
resourceGatewayId,
status,
type_;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource_configuration"
    values={[
        { label: 'delete_resource_configuration', value: 'delete_resource_configuration' }
    ]}
>
<TabItem value="delete_resource_configuration">

Deletes the specified resource configuration.

```sql
DELETE FROM aws.vpc_lattice.resource_configurations
WHERE resource_configuration_identifier = '{{ resource_configuration_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
