--- 
title: namespaces
hide_title: false
hide_table_of_contents: false
keywords:
  - namespaces
  - servicediscovery
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

Creates, updates, deletes, gets or lists a <code>namespaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="namespaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicediscovery.namespaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_namespace"
    values={[
        { label: 'get_namespace', value: 'get_namespace' }
    ]}
>
<TabItem value="get_namespace">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that Cloud Map assigns to the namespace when you create it.</td>
</tr>
<tr>
    <td><CopyableCode code="create_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the namespace was created, in Unix date/time format and Coordinated Universal Time (UTC). The value of CreateDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="creator_request_id" /></td>
    <td><code>string</code></td>
    <td>A unique string that identifies the request and that allows failed requests to be retried without the risk of running an operation twice.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description that you specify for the namespace when you create it.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of a namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the namespace, such as example.com. (pattern: &lt;code&gt;^&#91;!-~&#93;&#123;1,1024&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>A complex type that contains information that's specific to the type of the namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_owner" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that created the namespace. If this isn't your account ID, it's the ID of the account that shared the namespace with your account. For more information about shared namespaces, see Cross-account Cloud Map namespace sharing in the Cloud Map Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="service_count" /></td>
    <td><code>integer</code></td>
    <td>The number of services that are associated with the namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the namespace. The methods for discovering instances depends on the value that you specify: HTTP Instances can be discovered only programmatically, using the Cloud Map DiscoverInstances API. DNS_PUBLIC Instances can be discovered using public DNS queries and using the DiscoverInstances API. DNS_PRIVATE Instances can be discovered using DNS queries in VPCs and using the DiscoverInstances API. (DNS_PUBLIC, DNS_PRIVATE, HTTP)</td>
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
    <td><a href="#get_namespace"><CopyableCode code="get_namespace" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a namespace.</td>
</tr>
<tr>
    <td><a href="#create_private_dns_namespace"><CopyableCode code="create_private_dns_namespace" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Vpc"><code>Vpc</code></a></td>
    <td></td>
    <td>Creates a private namespace based on DNS, which is visible only inside a specified Amazon VPC. The namespace defines your service naming scheme. For example, if you name your namespace example.com and name your service backend, the resulting DNS name for the service is backend.example.com. Service instances that are registered using a private DNS namespace can be discovered using either a DiscoverInstances request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see Cloud Map quotas in the Cloud Map Developer Guide.</td>
</tr>
<tr>
    <td><a href="#create_http_namespace"><CopyableCode code="create_http_namespace" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an HTTP namespace. Service instances registered using an HTTP namespace can be discovered using a DiscoverInstances request but can't be discovered using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see Cloud Map quotas in the Cloud Map Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_http_namespace"><CopyableCode code="update_http_namespace" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an HTTP namespace.</td>
</tr>
<tr>
    <td><a href="#delete_namespace"><CopyableCode code="delete_namespace" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a namespace from the current account. If the namespace still contains one or more services, the request fails.</td>
</tr>
<tr>
    <td><a href="#create_public_dns_namespace"><CopyableCode code="create_public_dns_namespace" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a public namespace based on DNS, which is visible on the internet. The namespace defines your service naming scheme. For example, if you name your namespace example.com and name your service backend, the resulting DNS name for the service is backend.example.com. You can discover instances that were registered with a public DNS namespace by using either a DiscoverInstances request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see Cloud Map quotas in the Cloud Map Developer Guide. The CreatePublicDnsNamespace API operation is not supported in the Amazon Web Services GovCloud (US) Regions.</td>
</tr>
<tr>
    <td><a href="#discover_instances_revision"><CopyableCode code="discover_instances_revision" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-NamespaceName"><code>NamespaceName</code></a>, <a href="#parameter-ServiceName"><code>ServiceName</code></a></td>
    <td></td>
    <td>Discovers the increasing revision associated with an instance.</td>
</tr>
<tr>
    <td><a href="#list_namespaces"><CopyableCode code="list_namespaces" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists summary information about the namespaces that were created by the current Amazon Web Services account and shared with the current Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#update_private_dns_namespace"><CopyableCode code="update_private_dns_namespace" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a private DNS namespace.</td>
</tr>
<tr>
    <td><a href="#update_public_dns_namespace"><CopyableCode code="update_public_dns_namespace" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a public DNS namespace.</td>
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
    defaultValue="get_namespace"
    values={[
        { label: 'get_namespace', value: 'get_namespace' }
    ]}
>
<TabItem value="get_namespace">

Gets information about a namespace.

```sql
SELECT
arn,
create_date,
creator_request_id,
description,
id,
name,
properties,
resource_owner,
service_count,
type
FROM aws.servicediscovery.namespaces
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_private_dns_namespace"
    values={[
        { label: 'create_private_dns_namespace', value: 'create_private_dns_namespace' },
        { label: 'create_http_namespace', value: 'create_http_namespace' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_private_dns_namespace">

Creates a private namespace based on DNS, which is visible only inside a specified Amazon VPC. The namespace defines your service naming scheme. For example, if you name your namespace example.com and name your service backend, the resulting DNS name for the service is backend.example.com. Service instances that are registered using a private DNS namespace can be discovered using either a DiscoverInstances request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see Cloud Map quotas in the Cloud Map Developer Guide.

```sql
INSERT INTO aws.servicediscovery.namespaces (
Name,
CreatorRequestId,
Description,
Vpc,
Tags,
Properties,
region
)
SELECT 
'{{ Name }}',
'{{ CreatorRequestId }}',
'{{ Description }}',
'{{ Vpc }}' /* required */,
'{{ Tags }}',
'{{ Properties }}',
'{{ region }}'
RETURNING
operation_id
;
```
</TabItem>
<TabItem value="create_http_namespace">

Creates an HTTP namespace. Service instances registered using an HTTP namespace can be discovered using a DiscoverInstances request but can't be discovered using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see Cloud Map quotas in the Cloud Map Developer Guide.

```sql
INSERT INTO aws.servicediscovery.namespaces (
Name,
CreatorRequestId,
Description,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ CreatorRequestId }}',
'{{ Description }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
operation_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: namespaces
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the namespaces resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name that you want to assign to this namespace.
    - name: CreatorRequestId
      value: "{{ CreatorRequestId }}"
      description: |
        A unique string that identifies the request and that allows failed CreateHttpNamespace requests to be retried without the risk of running the operation twice. CreatorRequestId can be any unique string (for example, a date/time stamp).
    - name: Description
      value: "{{ Description }}"
      description: |
        A description for the namespace.
    - name: Vpc
      value: "{{ Vpc }}"
      description: |
        The ID of the Amazon VPC that you want to associate the namespace with.
    - name: Tags
      description: |
        The tags to add to the namespace. Each tag consists of a key and an optional value that you define. Tags keys can be up to 128 characters in length, and tag values can be up to 256 characters in length.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: Properties
      description: |
        Properties for the private DNS namespace.
      value:
        DnsProperties:
          SOA:
            TTL: {{ TTL }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_http_namespace"
    values={[
        { label: 'update_http_namespace', value: 'update_http_namespace' }
    ]}
>
<TabItem value="update_http_namespace">

Updates an HTTP namespace.

```sql
UPDATE aws.servicediscovery.namespaces
SET 
Id = '{{ Id }}',
UpdaterRequestId = '{{ UpdaterRequestId }}',
Namespace = '{{ Namespace }}'
WHERE 
region = '{{ region }}' --required
RETURNING
operation_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_namespace"
    values={[
        { label: 'delete_namespace', value: 'delete_namespace' }
    ]}
>
<TabItem value="delete_namespace">

Deletes a namespace from the current account. If the namespace still contains one or more services, the request fails.

```sql
DELETE FROM aws.servicediscovery.namespaces
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="create_public_dns_namespace"
    values={[
        { label: 'create_public_dns_namespace', value: 'create_public_dns_namespace' },
        { label: 'discover_instances_revision', value: 'discover_instances_revision' },
        { label: 'list_namespaces', value: 'list_namespaces' },
        { label: 'update_private_dns_namespace', value: 'update_private_dns_namespace' },
        { label: 'update_public_dns_namespace', value: 'update_public_dns_namespace' }
    ]}
>
<TabItem value="create_public_dns_namespace">

Creates a public namespace based on DNS, which is visible on the internet. The namespace defines your service naming scheme. For example, if you name your namespace example.com and name your service backend, the resulting DNS name for the service is backend.example.com. You can discover instances that were registered with a public DNS namespace by using either a DiscoverInstances request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see Cloud Map quotas in the Cloud Map Developer Guide. The CreatePublicDnsNamespace API operation is not supported in the Amazon Web Services GovCloud (US) Regions.

```sql
EXEC aws.servicediscovery.namespaces.create_public_dns_namespace 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}", 
"CreatorRequestId": "{{ CreatorRequestId }}", 
"Description": "{{ Description }}", 
"Tags": "{{ Tags }}", 
"Properties": "{{ Properties }}"
}'
;
```
</TabItem>
<TabItem value="discover_instances_revision">

Discovers the increasing revision associated with an instance.

```sql
EXEC aws.servicediscovery.namespaces.discover_instances_revision 
@region='{{ region }}' --required 
@@json=
'{
"NamespaceName": "{{ NamespaceName }}", 
"ServiceName": "{{ ServiceName }}", 
"OwnerAccount": "{{ OwnerAccount }}"
}'
;
```
</TabItem>
<TabItem value="list_namespaces">

Lists summary information about the namespaces that were created by the current Amazon Web Services account and shared with the current Amazon Web Services account.

```sql
EXEC aws.servicediscovery.namespaces.list_namespaces 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}, 
"Filters": "{{ Filters }}"
}'
;
```
</TabItem>
<TabItem value="update_private_dns_namespace">

Updates a private DNS namespace.

```sql
EXEC aws.servicediscovery.namespaces.update_private_dns_namespace 
@region='{{ region }}' --required 
@@json=
'{
"Id": "{{ Id }}", 
"UpdaterRequestId": "{{ UpdaterRequestId }}", 
"Namespace": "{{ Namespace }}"
}'
;
```
</TabItem>
<TabItem value="update_public_dns_namespace">

Updates a public DNS namespace.

```sql
EXEC aws.servicediscovery.namespaces.update_public_dns_namespace 
@region='{{ region }}' --required 
@@json=
'{
"Id": "{{ Id }}", 
"UpdaterRequestId": "{{ UpdaterRequestId }}", 
"Namespace": "{{ Namespace }}"
}'
;
```
</TabItem>
</Tabs>
