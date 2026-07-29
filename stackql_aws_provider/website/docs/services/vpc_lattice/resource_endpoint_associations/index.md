--- 
title: resource_endpoint_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_endpoint_associations
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

Creates, updates, deletes, gets or lists a <code>resource_endpoint_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_endpoint_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.vpc_lattice.resource_endpoint_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resource_endpoint_associations"
    values={[
        { label: 'list_resource_endpoint_associations', value: 'list_resource_endpoint_associations' }
    ]}
>
<TabItem value="list_resource_endpoint_associations">

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
    <td>The ID of the VPC endpoint association. (pattern: &lt;code&gt;rea-&#91;0-9a-f&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the VPC endpoint association. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:resourceendpointassociation/rea-&#91;0-9a-f&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the VPC endpoint association was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The account that created the association. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource configuration. (pattern: &lt;code&gt;arn:&#91;a-z0-9f\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:resourceconfiguration/rcfg-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_configuration_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource configuration. (pattern: &lt;code&gt;rcfg-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_configuration_name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource configuration. (pattern: &lt;code&gt;(?!rcfg-)(?!&#91;-&#93;)(?!.*&#91;-&#93;$)(?!.*&#91;-&#93;&#123;2&#125;)&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC endpoint. (pattern: &lt;code&gt;vpce-&#91;0-9a-f&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the VPC endpoint. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_resource_endpoint_associations"><CopyableCode code="list_resource_endpoint_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resourceConfigurationIdentifier"><code>resourceConfigurationIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-resourceEndpointAssociationIdentifier"><code>resourceEndpointAssociationIdentifier</code></a>, <a href="#parameter-vpcEndpointId"><code>vpcEndpointId</code></a>, <a href="#parameter-vpcEndpointOwner"><code>vpcEndpointOwner</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the associations for the specified VPC endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_resource_endpoint_association"><CopyableCode code="delete_resource_endpoint_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-resource_endpoint_association_identifier"><code>resource_endpoint_association_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates the resource configuration from the resource VPC endpoint.</td>
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
<tr id="parameter-resourceConfigurationIdentifier">
    <td><CopyableCode code="resourceConfigurationIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID for the resource configuration associated with the VPC endpoint.</td>
</tr>
<tr id="parameter-resource_endpoint_association_identifier">
    <td><CopyableCode code="resource_endpoint_association_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the association.</td>
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
<tr id="parameter-resourceEndpointAssociationIdentifier">
    <td><CopyableCode code="resourceEndpointAssociationIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the association.</td>
</tr>
<tr id="parameter-vpcEndpointId">
    <td><CopyableCode code="vpcEndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC endpoint in the association.</td>
</tr>
<tr id="parameter-vpcEndpointOwner">
    <td><CopyableCode code="vpcEndpointOwner" /></td>
    <td><code>string</code></td>
    <td>The owner of the VPC endpoint in the association.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_resource_endpoint_associations"
    values={[
        { label: 'list_resource_endpoint_associations', value: 'list_resource_endpoint_associations' }
    ]}
>
<TabItem value="list_resource_endpoint_associations">

Lists the associations for the specified VPC endpoint.

```sql
SELECT
id,
arn,
created_at,
created_by,
resource_configuration_arn,
resource_configuration_id,
resource_configuration_name,
vpc_endpoint_id,
vpc_endpoint_owner
FROM aws.vpc_lattice.resource_endpoint_associations
WHERE resourceConfigurationIdentifier = '{{ resourceConfigurationIdentifier }}' -- required
AND region = '{{ region }}' -- required
AND resourceEndpointAssociationIdentifier = '{{ resourceEndpointAssociationIdentifier }}'
AND vpcEndpointId = '{{ vpcEndpointId }}'
AND vpcEndpointOwner = '{{ vpcEndpointOwner }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource_endpoint_association"
    values={[
        { label: 'delete_resource_endpoint_association', value: 'delete_resource_endpoint_association' }
    ]}
>
<TabItem value="delete_resource_endpoint_association">

Disassociates the resource configuration from the resource VPC endpoint.

```sql
DELETE FROM aws.vpc_lattice.resource_endpoint_associations
WHERE resource_endpoint_association_identifier = '{{ resource_endpoint_association_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
