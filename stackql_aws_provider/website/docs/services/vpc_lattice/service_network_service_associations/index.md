--- 
title: service_network_service_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - service_network_service_associations
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

Creates, updates, deletes, gets or lists a <code>service_network_service_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_network_service_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.vpc_lattice.service_network_service_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_network_service_association"
    values={[
        { label: 'get_service_network_service_association', value: 'get_service_network_service_association' },
        { label: 'list_service_network_service_associations', value: 'list_service_network_service_associations' }
    ]}
>
<TabItem value="get_service_network_service_association">

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
    <td>The ID of the service network and service association. (pattern: &lt;code&gt;((snsa-&#91;0-9a-z&#93;&#123;17&#125;)|(arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:servicenetworkserviceassociation/snsa-&#91;0-9a-z&#93;&#123;17&#125;))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the association. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:servicenetworkserviceassociation/snsa-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the association was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The account that created the association. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="custom_domain_name" /></td>
    <td><code>string</code></td>
    <td>The custom domain name of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_entry" /></td>
    <td><code>object</code></td>
    <td>The DNS name of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_code" /></td>
    <td><code>string</code></td>
    <td>The failure code.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>The failure message.</td>
</tr>
<tr>
    <td><CopyableCode code="service_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:service/svc-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the service. (pattern: &lt;code&gt;svc-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service. (pattern: &lt;code&gt;(?!svc-)(?!&#91;-&#93;)(?!.*&#91;-&#93;$)(?!.*&#91;-&#93;&#123;2&#125;)&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_network_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service network. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:servicenetwork/sn-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the service network. (pattern: &lt;code&gt;sn-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_network_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service network. (pattern: &lt;code&gt;(?!&#91;-&#93;)(?!.*&#91;-&#93;$)(?!.*&#91;-&#93;&#123;2&#125;)&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the association. (CREATE_IN_PROGRESS, ACTIVE, DELETE_IN_PROGRESS, CREATE_FAILED, DELETE_FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_service_network_service_associations">

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
    <td>The ID of the association. (pattern: &lt;code&gt;((snsa-&#91;0-9a-z&#93;&#123;17&#125;)|(arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:servicenetworkserviceassociation/snsa-&#91;0-9a-z&#93;&#123;17&#125;))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the association. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:servicenetworkserviceassociation/snsa-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the association was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The account that created the association. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="custom_domain_name" /></td>
    <td><code>string</code></td>
    <td>The custom domain name of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_entry" /></td>
    <td><code>object</code></td>
    <td>The DNS information.</td>
</tr>
<tr>
    <td><CopyableCode code="service_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:service/svc-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the service. (pattern: &lt;code&gt;svc-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service. (pattern: &lt;code&gt;(?!svc-)(?!&#91;-&#93;)(?!.*&#91;-&#93;$)(?!.*&#91;-&#93;&#123;2&#125;)&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_network_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service network. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:servicenetwork/sn-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the service network. (pattern: &lt;code&gt;sn-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_network_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service network. (pattern: &lt;code&gt;(?!&#91;-&#93;)(?!.*&#91;-&#93;$)(?!.*&#91;-&#93;&#123;2&#125;)&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the service network’s association with the service. If the deletion fails, try to delete again. (CREATE_IN_PROGRESS, ACTIVE, DELETE_IN_PROGRESS, CREATE_FAILED, DELETE_FAILED)</td>
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
    <td><a href="#get_service_network_service_association"><CopyableCode code="get_service_network_service_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_network_service_association_identifier"><code>service_network_service_association_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified association between a service network and a service.</td>
</tr>
<tr>
    <td><a href="#list_service_network_service_associations"><CopyableCode code="list_service_network_service_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-serviceNetworkIdentifier"><code>serviceNetworkIdentifier</code></a>, <a href="#parameter-serviceIdentifier"><code>serviceIdentifier</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the associations between a service network and a service. You can filter the list either by service or service network. You must provide either the service network identifier or the service identifier. Every association in Amazon VPC Lattice has a unique Amazon Resource Name (ARN), such as when a service network is associated with a VPC or when a service is associated with a service network. If the association is for a resource is shared with another account, the association includes the local account ID as the prefix in the ARN.</td>
</tr>
<tr>
    <td><a href="#create_service_network_service_association"><CopyableCode code="create_service_network_service_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceIdentifier"><code>serviceIdentifier</code></a>, <a href="#parameter-serviceNetworkIdentifier"><code>serviceNetworkIdentifier</code></a></td>
    <td></td>
    <td>Associates the specified service with the specified service network. For more information, see Manage service associations in the Amazon VPC Lattice User Guide. You can't use this operation if the service and service network are already associated or if there is a disassociation or deletion in progress. If the association fails, you can retry the operation by deleting the association and recreating it. You cannot associate a service and service network that are shared with a caller. The caller must own either the service or the service network. As a result of this operation, the association is created in the service network account and the association owner account.</td>
</tr>
<tr>
    <td><a href="#delete_service_network_service_association"><CopyableCode code="delete_service_network_service_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_network_service_association_identifier"><code>service_network_service_association_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the association between a service and a service network. This operation fails if an association is still in progress.</td>
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
<tr id="parameter-service_network_service_association_identifier">
    <td><CopyableCode code="service_network_service_association_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the association.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token for the next page of results.</td>
</tr>
<tr id="parameter-serviceIdentifier">
    <td><CopyableCode code="serviceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the service.</td>
</tr>
<tr id="parameter-serviceNetworkIdentifier">
    <td><CopyableCode code="serviceNetworkIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the service network.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_service_network_service_association"
    values={[
        { label: 'get_service_network_service_association', value: 'get_service_network_service_association' },
        { label: 'list_service_network_service_associations', value: 'list_service_network_service_associations' }
    ]}
>
<TabItem value="get_service_network_service_association">

Retrieves information about the specified association between a service network and a service.

```sql
SELECT
id,
arn,
created_at,
created_by,
custom_domain_name,
dns_entry,
failure_code,
failure_message,
service_arn,
service_id,
service_name,
service_network_arn,
service_network_id,
service_network_name,
status
FROM aws.vpc_lattice.service_network_service_associations
WHERE service_network_service_association_identifier = '{{ service_network_service_association_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_service_network_service_associations">

Lists the associations between a service network and a service. You can filter the list either by service or service network. You must provide either the service network identifier or the service identifier. Every association in Amazon VPC Lattice has a unique Amazon Resource Name (ARN), such as when a service network is associated with a VPC or when a service is associated with a service network. If the association is for a resource is shared with another account, the association includes the local account ID as the prefix in the ARN.

```sql
SELECT
id,
arn,
created_at,
created_by,
custom_domain_name,
dns_entry,
service_arn,
service_id,
service_name,
service_network_arn,
service_network_id,
service_network_name,
status
FROM aws.vpc_lattice.service_network_service_associations
WHERE region = '{{ region }}' -- required
AND serviceNetworkIdentifier = '{{ serviceNetworkIdentifier }}'
AND serviceIdentifier = '{{ serviceIdentifier }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service_network_service_association"
    values={[
        { label: 'create_service_network_service_association', value: 'create_service_network_service_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service_network_service_association">

Associates the specified service with the specified service network. For more information, see Manage service associations in the Amazon VPC Lattice User Guide. You can't use this operation if the service and service network are already associated or if there is a disassociation or deletion in progress. If the association fails, you can retry the operation by deleting the association and recreating it. You cannot associate a service and service network that are shared with a caller. The caller must own either the service or the service network. As a result of this operation, the association is created in the service network account and the association owner account.

```sql
INSERT INTO aws.vpc_lattice.service_network_service_associations (
clientToken,
serviceIdentifier,
serviceNetworkIdentifier,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ serviceIdentifier }}' /* required */,
'{{ serviceNetworkIdentifier }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
id,
arn,
created_by,
custom_domain_name,
dns_entry,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_network_service_associations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the service_network_service_associations resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: serviceIdentifier
      value: "{{ serviceIdentifier }}"
    - name: serviceNetworkIdentifier
      value: "{{ serviceNetworkIdentifier }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service_network_service_association"
    values={[
        { label: 'delete_service_network_service_association', value: 'delete_service_network_service_association' }
    ]}
>
<TabItem value="delete_service_network_service_association">

Deletes the association between a service and a service network. This operation fails if an association is still in progress.

```sql
DELETE FROM aws.vpc_lattice.service_network_service_associations
WHERE service_network_service_association_identifier = '{{ service_network_service_association_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
