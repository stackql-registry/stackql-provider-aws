--- 
title: service_network_resource_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - service_network_resource_associations
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

Creates, updates, deletes, gets or lists a <code>service_network_resource_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_network_resource_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.vpc_lattice.service_network_resource_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_network_resource_association"
    values={[
        { label: 'get_service_network_resource_association', value: 'get_service_network_resource_association' },
        { label: 'list_service_network_resource_associations', value: 'list_service_network_resource_associations' }
    ]}
>
<TabItem value="get_service_network_resource_association">

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
    <td>The ID of the association. (pattern: &lt;code&gt;snra-&#91;0-9a-f&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the association. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:servicenetworkresourceassociation/snra-&#91;0-9a-f&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the association was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The account that created the association. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dnsEntry" /></td>
    <td><code>object</code></td>
    <td>The DNS entry for the service.</td>
</tr>
<tr>
    <td><CopyableCode code="domainVerificationStatus" /></td>
    <td><code>string</code></td>
    <td>The domain verification status in the service network resource association. (VERIFIED, PENDING, VERIFICATION_TIMED_OUT)</td>
</tr>
<tr>
    <td><CopyableCode code="failureCode" /></td>
    <td><code>string</code></td>
    <td>The failure code.</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>string</code></td>
    <td>The reason the association request failed.</td>
</tr>
<tr>
    <td><CopyableCode code="isManagedAssociation" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the association is managed by Amazon.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent date and time that the association was updated, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="privateDnsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if private DNS is enabled in the service network resource association.</td>
</tr>
<tr>
    <td><CopyableCode code="privateDnsEntry" /></td>
    <td><code>object</code></td>
    <td>The private DNS entry for the service.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the association. (pattern: &lt;code&gt;arn:&#91;a-z0-9f\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:resourceconfiguration/rcfg-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceConfigurationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource configuration that is associated with the service network. (pattern: &lt;code&gt;rcfg-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceConfigurationName" /></td>
    <td><code>string</code></td>
    <td>The name of the resource configuration that is associated with the service network. (pattern: &lt;code&gt;(?!rcfg-)(?!&#91;-&#93;)(?!.*&#91;-&#93;$)(?!.*&#91;-&#93;&#123;2&#125;)&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceNetworkArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service network that is associated with the resource configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceNetworkId" /></td>
    <td><code>string</code></td>
    <td>The ID of the service network that is associated with the resource configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceNetworkName" /></td>
    <td><code>string</code></td>
    <td>The name of the service network that is associated with the resource configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the association. (CREATE_IN_PROGRESS, ACTIVE, PARTIAL, DELETE_IN_PROGRESS, CREATE_FAILED, DELETE_FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_service_network_resource_associations">

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
    <td>The ID of the association between the service network and resource configuration. (pattern: &lt;code&gt;snra-&#91;0-9a-f&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the association. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:servicenetworkresourceassociation/snra-&#91;0-9a-f&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the association was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The account that created the association. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dnsEntry" /></td>
    <td><code>object</code></td>
    <td>The DNS entry for the service.</td>
</tr>
<tr>
    <td><CopyableCode code="failureCode" /></td>
    <td><code>string</code></td>
    <td>The failure code.</td>
</tr>
<tr>
    <td><CopyableCode code="isManagedAssociation" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the association is managed by Amazon.</td>
</tr>
<tr>
    <td><CopyableCode code="privateDnsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if private DNS is enabled for the service network resource association.</td>
</tr>
<tr>
    <td><CopyableCode code="privateDnsEntry" /></td>
    <td><code>object</code></td>
    <td>The private DNS entry for the service.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the association. (pattern: &lt;code&gt;arn:&#91;a-z0-9f\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:resourceconfiguration/rcfg-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceConfigurationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource configuration associated with the service network. (pattern: &lt;code&gt;rcfg-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceConfigurationName" /></td>
    <td><code>string</code></td>
    <td>The name of the resource configuration associated with the service network. (pattern: &lt;code&gt;(?!rcfg-)(?!&#91;-&#93;)(?!.*&#91;-&#93;$)(?!.*&#91;-&#93;&#123;2&#125;)&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceNetworkArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service network associated with the resource configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceNetworkId" /></td>
    <td><code>string</code></td>
    <td>The ID of the service network associated with the resource configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceNetworkName" /></td>
    <td><code>string</code></td>
    <td>The name of the service network associated with the resource configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the service network’s association with the resource configuration. If the deletion fails, try to delete again. (CREATE_IN_PROGRESS, ACTIVE, PARTIAL, DELETE_IN_PROGRESS, CREATE_FAILED, DELETE_FAILED)</td>
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
    <td><a href="#get_service_network_resource_association"><CopyableCode code="get_service_network_resource_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_network_resource_association_identifier"><code>service_network_resource_association_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified association between a service network and a resource configuration.</td>
</tr>
<tr>
    <td><a href="#list_service_network_resource_associations"><CopyableCode code="list_service_network_resource_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-serviceNetworkIdentifier"><code>serviceNetworkIdentifier</code></a>, <a href="#parameter-resourceConfigurationIdentifier"><code>resourceConfigurationIdentifier</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-includeChildren"><code>includeChildren</code></a></td>
    <td>Lists the associations between a service network and a resource configuration.</td>
</tr>
<tr>
    <td><a href="#create_service_network_resource_association"><CopyableCode code="create_service_network_resource_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceConfigurationIdentifier"><code>resourceConfigurationIdentifier</code></a>, <a href="#parameter-serviceNetworkIdentifier"><code>serviceNetworkIdentifier</code></a></td>
    <td></td>
    <td>Associates the specified service network with the specified resource configuration. This allows the resource configuration to receive connections through the service network, including through a service network VPC endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_service_network_resource_association"><CopyableCode code="delete_service_network_resource_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_network_resource_association_identifier"><code>service_network_resource_association_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the association between a service network and a resource configuration.</td>
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
<tr id="parameter-service_network_resource_association_identifier">
    <td><CopyableCode code="service_network_resource_association_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the association.</td>
</tr>
<tr id="parameter-includeChildren">
    <td><CopyableCode code="includeChildren" /></td>
    <td><code>boolean</code></td>
    <td>Include service network resource associations of the child resource configuration with the grouped resource configuration. The type is boolean and the default value is false.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum page size.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If there are additional results, a pagination token for the next page of results.</td>
</tr>
<tr id="parameter-resourceConfigurationIdentifier">
    <td><CopyableCode code="resourceConfigurationIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource configuration.</td>
</tr>
<tr id="parameter-serviceNetworkIdentifier">
    <td><CopyableCode code="serviceNetworkIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the service network.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_service_network_resource_association"
    values={[
        { label: 'get_service_network_resource_association', value: 'get_service_network_resource_association' },
        { label: 'list_service_network_resource_associations', value: 'list_service_network_resource_associations' }
    ]}
>
<TabItem value="get_service_network_resource_association">

Retrieves information about the specified association between a service network and a resource configuration.

```sql
SELECT
id,
arn,
createdAt,
createdBy,
dnsEntry,
domainVerificationStatus,
failureCode,
failureReason,
isManagedAssociation,
lastUpdatedAt,
privateDnsEnabled,
privateDnsEntry,
resourceConfigurationArn,
resourceConfigurationId,
resourceConfigurationName,
serviceNetworkArn,
serviceNetworkId,
serviceNetworkName,
status
FROM aws.vpc_lattice.service_network_resource_associations
WHERE service_network_resource_association_identifier = '{{ service_network_resource_association_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_service_network_resource_associations">

Lists the associations between a service network and a resource configuration.

```sql
SELECT
id,
arn,
createdAt,
createdBy,
dnsEntry,
failureCode,
isManagedAssociation,
privateDnsEnabled,
privateDnsEntry,
resourceConfigurationArn,
resourceConfigurationId,
resourceConfigurationName,
serviceNetworkArn,
serviceNetworkId,
serviceNetworkName,
status
FROM aws.vpc_lattice.service_network_resource_associations
WHERE region = '{{ region }}' -- required
AND serviceNetworkIdentifier = '{{ serviceNetworkIdentifier }}'
AND resourceConfigurationIdentifier = '{{ resourceConfigurationIdentifier }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND includeChildren = '{{ includeChildren }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service_network_resource_association"
    values={[
        { label: 'create_service_network_resource_association', value: 'create_service_network_resource_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service_network_resource_association">

Associates the specified service network with the specified resource configuration. This allows the resource configuration to receive connections through the service network, including through a service network VPC endpoint.

```sql
INSERT INTO aws.vpc_lattice.service_network_resource_associations (
clientToken,
resourceConfigurationIdentifier,
serviceNetworkIdentifier,
privateDnsEnabled,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ resourceConfigurationIdentifier }}' /* required */,
'{{ serviceNetworkIdentifier }}' /* required */,
{{ privateDnsEnabled }},
'{{ tags }}',
'{{ region }}'
RETURNING
id,
arn,
createdBy,
privateDnsEnabled,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_network_resource_associations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the service_network_resource_associations resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: resourceConfigurationIdentifier
      value: "{{ resourceConfigurationIdentifier }}"
    - name: serviceNetworkIdentifier
      value: "{{ serviceNetworkIdentifier }}"
    - name: privateDnsEnabled
      value: {{ privateDnsEnabled }}
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service_network_resource_association"
    values={[
        { label: 'delete_service_network_resource_association', value: 'delete_service_network_resource_association' }
    ]}
>
<TabItem value="delete_service_network_resource_association">

Deletes the association between a service network and a resource configuration.

```sql
DELETE FROM aws.vpc_lattice.service_network_resource_associations
WHERE service_network_resource_association_identifier = '{{ service_network_resource_association_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
