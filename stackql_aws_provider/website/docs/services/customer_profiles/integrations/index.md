--- 
title: integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - integrations
  - customer_profiles
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

Creates, updates, deletes, gets or lists an <code>integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_integration"
    values={[
        { label: 'get_integration', value: 'get_integration' }
    ]}
>
<TabItem value="get_integration">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the domain was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EventTriggerNames" /></td>
    <td><code>array</code></td>
    <td>A list of unique names for active event triggers associated with the integration. This list would be empty if no Event Trigger is associated with the integration.</td>
</tr>
<tr>
    <td><CopyableCode code="IsUnstructured" /></td>
    <td><code>boolean</code></td>
    <td>Boolean that shows if the Flow that's associated with the Integration is created in Amazon Appflow, or with ObjectTypeName equals _unstructured via API/CLI in flowDefinition.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the domain was most recently edited.</td>
</tr>
<tr>
    <td><CopyableCode code="ObjectTypeName" /></td>
    <td><code>string</code></td>
    <td>The name of the profile object type. (pattern: &lt;code&gt;^&#91;a-zA-Z_&#93;&#91;a-zA-Z_0-9-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ObjectTypeNames" /></td>
    <td><code>object</code></td>
    <td>A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an ObjectTypeName (template) used to ingest the event. It supports the following event types: SegmentIdentify, ShopifyCreateCustomers, ShopifyUpdateCustomers, ShopifyCreateDraftOrders, ShopifyUpdateDraftOrders, ShopifyCreateOrders, and ShopifyUpdatedOrders.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role. The Integration uses this role to make Customer Profiles requests on your behalf. (pattern: &lt;code&gt;arn:aws:iam:.*:&#91;0-9&#93;+:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Scope" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the integration applies to profile level data (associated with profiles) or domain level data (not associated with any specific profile). The default value is PROFILE. (PROFILE, DOMAIN)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="Uri" /></td>
    <td><code>string</code></td>
    <td>The URI of the S3 bucket or any other type of data source.</td>
</tr>
<tr>
    <td><CopyableCode code="WorkflowId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the workflow.</td>
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
    <td><a href="#get_integration"><CopyableCode code="get_integration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an integration for a domain.</td>
</tr>
<tr>
    <td><a href="#put_integration"><CopyableCode code="put_integration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds an integration between the service and a third-party service, which includes Amazon AppFlow and Amazon Connect. An integration can belong to only one domain. To add or remove tags on an existing Integration, see TagResource / UntagResource.</td>
</tr>
<tr>
    <td><a href="#delete_integration"><CopyableCode code="delete_integration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes an integration from a specific domain.</td>
</tr>
<tr>
    <td><a href="#list_integrations"><CopyableCode code="list_integrations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-include-hidden"><code>include-hidden</code></a></td>
    <td>Lists all of the integrations in your domain.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-include-hidden">
    <td><CopyableCode code="include-hidden" /></td>
    <td><code>boolean</code></td>
    <td>Boolean to indicate if hidden integration should be returned. Defaults to False.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of objects returned per page.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The pagination token from the previous ListIntegrations API call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_integration"
    values={[
        { label: 'get_integration', value: 'get_integration' }
    ]}
>
<TabItem value="get_integration">

Returns an integration for a domain.

```sql
SELECT
CreatedAt,
DomainName,
EventTriggerNames,
IsUnstructured,
LastUpdatedAt,
ObjectTypeName,
ObjectTypeNames,
RoleArn,
Scope,
Tags,
Uri,
WorkflowId
FROM aws.customer_profiles.integrations
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_integration"
    values={[
        { label: 'put_integration', value: 'put_integration' }
    ]}
>
<TabItem value="put_integration">

Adds an integration between the service and a third-party service, which includes Amazon AppFlow and Amazon Connect. An integration can belong to only one domain. To add or remove tags on an existing Integration, see TagResource / UntagResource.

```sql
REPLACE aws.customer_profiles.integrations
SET 
Uri = '{{ Uri }}',
ObjectTypeName = '{{ ObjectTypeName }}',
ObjectTypeNames = '{{ ObjectTypeNames }}',
Tags = '{{ Tags }}',
FlowDefinition = '{{ FlowDefinition }}',
RoleArn = '{{ RoleArn }}',
EventTriggerNames = '{{ EventTriggerNames }}',
Scope = '{{ Scope }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
RETURNING
CreatedAt,
DomainName,
EventTriggerNames,
IsUnstructured,
LastUpdatedAt,
ObjectTypeName,
ObjectTypeNames,
RoleArn,
Scope,
Tags,
Uri,
WorkflowId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_integration"
    values={[
        { label: 'delete_integration', value: 'delete_integration' }
    ]}
>
<TabItem value="delete_integration">

Removes an integration from a specific domain.

```sql
DELETE FROM aws.customer_profiles.integrations
WHERE domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_integrations"
    values={[
        { label: 'list_integrations', value: 'list_integrations' }
    ]}
>
<TabItem value="list_integrations">

Lists all of the integrations in your domain.

```sql
EXEC aws.customer_profiles.integrations.list_integrations 
@domain_name='{{ domain_name }}' --required, 
@region='{{ region }}' --required, 
@next-token='{{ next-token }}', 
@max-results='{{ max-results }}', 
@include-hidden={{ include-hidden }}
;
```
</TabItem>
</Tabs>
