--- 
title: service_network_vpc_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - service_network_vpc_associations
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

Creates, updates, deletes, gets or lists a <code>service_network_vpc_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_network_vpc_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.vpc_lattice.service_network_vpc_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_network_vpc_association"
    values={[
        { label: 'get_service_network_vpc_association', value: 'get_service_network_vpc_association' },
        { label: 'list_service_network_vpc_associations', value: 'list_service_network_vpc_associations' }
    ]}
>
<TabItem value="get_service_network_vpc_association">

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
    <td>The ID of the association. (pattern: &lt;code&gt;snva-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the association. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:servicenetworkvpcassociation/snva-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
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
    <td><CopyableCode code="dns_options" /></td>
    <td><code>object</code></td>
    <td>The DNS configuration options.</td>
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
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the association was last updated, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="private_dns_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if private DNS is enabled in the VPC association.</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_ids" /></td>
    <td><code>array</code></td>
    <td>The IDs of the security groups.</td>
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
    <td>The status of the association. (CREATE_IN_PROGRESS, ACTIVE, UPDATE_IN_PROGRESS, DELETE_IN_PROGRESS, CREATE_FAILED, DELETE_FAILED, UPDATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC. (pattern: &lt;code&gt;vpc-((&#91;0-9a-z&#93;&#123;8&#125;)|(&#91;0-9a-z&#93;&#123;17&#125;))&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_service_network_vpc_associations">

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
    <td>The ID of the association. (pattern: &lt;code&gt;snva-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the association. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:servicenetworkvpcassociation/snva-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
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
    <td><CopyableCode code="dns_options" /></td>
    <td><code>object</code></td>
    <td>The DNS configuration options.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the association was last updated, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="private_dns_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if private DNS is enabled for the service network VPC association.</td>
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
    <td>The status. (CREATE_IN_PROGRESS, ACTIVE, UPDATE_IN_PROGRESS, DELETE_IN_PROGRESS, CREATE_FAILED, DELETE_FAILED, UPDATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC. (pattern: &lt;code&gt;vpc-((&#91;0-9a-z&#93;&#123;8&#125;)|(&#91;0-9a-z&#93;&#123;17&#125;))&lt;/code&gt;)</td>
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
    <td><a href="#get_service_network_vpc_association"><CopyableCode code="get_service_network_vpc_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_network_vpc_association_identifier"><code>service_network_vpc_association_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified association between a service network and a VPC.</td>
</tr>
<tr>
    <td><a href="#list_service_network_vpc_associations"><CopyableCode code="list_service_network_vpc_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-serviceNetworkIdentifier"><code>serviceNetworkIdentifier</code></a>, <a href="#parameter-vpcIdentifier"><code>vpcIdentifier</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the associations between a service network and a VPC. You can filter the list either by VPC or service network. You must provide either the ID of the service network identifier or the ID of the VPC.</td>
</tr>
<tr>
    <td><a href="#create_service_network_vpc_association"><CopyableCode code="create_service_network_vpc_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceNetworkIdentifier"><code>serviceNetworkIdentifier</code></a>, <a href="#parameter-vpcIdentifier"><code>vpcIdentifier</code></a></td>
    <td></td>
    <td>Associates a VPC with a service network. When you associate a VPC with the service network, it enables all the resources within that VPC to be clients and communicate with other services in the service network. For more information, see Manage VPC associations in the Amazon VPC Lattice User Guide. You can't use this operation if there is a disassociation in progress. If the association fails, retry by deleting the association and recreating it. As a result of this operation, the association gets created in the service network account and the VPC owner account. If you add a security group to the service network and VPC association, the association must continue to always have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and recreate it without security groups.</td>
</tr>
<tr>
    <td><a href="#update_service_network_vpc_association"><CopyableCode code="update_service_network_vpc_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_network_vpc_association_identifier"><code>service_network_vpc_association_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-securityGroupIds"><code>securityGroupIds</code></a></td>
    <td></td>
    <td>Updates the service network and VPC association. If you add a security group to the service network and VPC association, the association must continue to have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and then recreate it without security groups.</td>
</tr>
<tr>
    <td><a href="#delete_service_network_vpc_association"><CopyableCode code="delete_service_network_vpc_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_network_vpc_association_identifier"><code>service_network_vpc_association_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates the VPC from the service network. You can't disassociate the VPC if there is a create or update association in progress.</td>
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
<tr id="parameter-service_network_vpc_association_identifier">
    <td><CopyableCode code="service_network_vpc_association_identifier" /></td>
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
<tr id="parameter-serviceNetworkIdentifier">
    <td><CopyableCode code="serviceNetworkIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the service network.</td>
</tr>
<tr id="parameter-vpcIdentifier">
    <td><CopyableCode code="vpcIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the VPC.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_service_network_vpc_association"
    values={[
        { label: 'get_service_network_vpc_association', value: 'get_service_network_vpc_association' },
        { label: 'list_service_network_vpc_associations', value: 'list_service_network_vpc_associations' }
    ]}
>
<TabItem value="get_service_network_vpc_association">

Retrieves information about the specified association between a service network and a VPC.

```sql
SELECT
id,
arn,
created_at,
created_by,
dns_options,
failure_code,
failure_message,
last_updated_at,
private_dns_enabled,
security_group_ids,
service_network_arn,
service_network_id,
service_network_name,
status,
vpc_id
FROM aws.vpc_lattice.service_network_vpc_associations
WHERE service_network_vpc_association_identifier = '{{ service_network_vpc_association_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_service_network_vpc_associations">

Lists the associations between a service network and a VPC. You can filter the list either by VPC or service network. You must provide either the ID of the service network identifier or the ID of the VPC.

```sql
SELECT
id,
arn,
created_at,
created_by,
dns_options,
last_updated_at,
private_dns_enabled,
service_network_arn,
service_network_id,
service_network_name,
status,
vpc_id
FROM aws.vpc_lattice.service_network_vpc_associations
WHERE region = '{{ region }}' -- required
AND serviceNetworkIdentifier = '{{ serviceNetworkIdentifier }}'
AND vpcIdentifier = '{{ vpcIdentifier }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service_network_vpc_association"
    values={[
        { label: 'create_service_network_vpc_association', value: 'create_service_network_vpc_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service_network_vpc_association">

Associates a VPC with a service network. When you associate a VPC with the service network, it enables all the resources within that VPC to be clients and communicate with other services in the service network. For more information, see Manage VPC associations in the Amazon VPC Lattice User Guide. You can't use this operation if there is a disassociation in progress. If the association fails, retry by deleting the association and recreating it. As a result of this operation, the association gets created in the service network account and the VPC owner account. If you add a security group to the service network and VPC association, the association must continue to always have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and recreate it without security groups.

```sql
INSERT INTO aws.vpc_lattice.service_network_vpc_associations (
clientToken,
serviceNetworkIdentifier,
vpcIdentifier,
privateDnsEnabled,
securityGroupIds,
tags,
dnsOptions,
region
)
SELECT 
'{{ clientToken }}',
'{{ serviceNetworkIdentifier }}' /* required */,
'{{ vpcIdentifier }}' /* required */,
{{ privateDnsEnabled }},
'{{ securityGroupIds }}',
'{{ tags }}',
'{{ dnsOptions }}',
'{{ region }}'
RETURNING
id,
arn,
created_by,
dns_options,
private_dns_enabled,
security_group_ids,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_network_vpc_associations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the service_network_vpc_associations resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: serviceNetworkIdentifier
      value: "{{ serviceNetworkIdentifier }}"
    - name: vpcIdentifier
      value: "{{ vpcIdentifier }}"
    - name: privateDnsEnabled
      value: {{ privateDnsEnabled }}
    - name: securityGroupIds
      value:
        - "{{ securityGroupIds }}"
    - name: tags
      value: "{{ tags }}"
    - name: dnsOptions
      description: |
        The DNS configuration options.
      value:
        privateDnsPreference: "{{ privateDnsPreference }}"
        privateDnsSpecifiedDomains:
          - "{{ privateDnsSpecifiedDomains }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service_network_vpc_association"
    values={[
        { label: 'update_service_network_vpc_association', value: 'update_service_network_vpc_association' }
    ]}
>
<TabItem value="update_service_network_vpc_association">

Updates the service network and VPC association. If you add a security group to the service network and VPC association, the association must continue to have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and then recreate it without security groups.

```sql
UPDATE aws.vpc_lattice.service_network_vpc_associations
SET 
securityGroupIds = '{{ securityGroupIds }}'
WHERE 
service_network_vpc_association_identifier = '{{ service_network_vpc_association_identifier }}' --required
AND region = '{{ region }}' --required
AND securityGroupIds = '{{ securityGroupIds }}' --required
RETURNING
id,
arn,
created_by,
security_group_ids,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service_network_vpc_association"
    values={[
        { label: 'delete_service_network_vpc_association', value: 'delete_service_network_vpc_association' }
    ]}
>
<TabItem value="delete_service_network_vpc_association">

Disassociates the VPC from the service network. You can't disassociate the VPC if there is a create or update association in progress.

```sql
DELETE FROM aws.vpc_lattice.service_network_vpc_associations
WHERE service_network_vpc_association_identifier = '{{ service_network_vpc_association_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
