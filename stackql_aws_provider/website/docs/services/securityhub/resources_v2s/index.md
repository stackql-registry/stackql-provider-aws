--- 
title: resources_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - resources_v2s
  - securityhub
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

Creates, updates, deletes, gets or lists a <code>resources_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.resources_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resources_v2"
    values={[
        { label: 'get_resources_v2', value: 'get_resources_v2' }
    ]}
>
<TabItem value="get_resources_v2">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account that recorded the resource data in Security Hub. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="account_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Web Services account that's associated with the resource. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="discovery_type" /></td>
    <td><code>string</code></td>
    <td>Specifies how the resource was discovered. If the value is Managed, the resource is natively provided by a cloud service provider. If the value is SelfHosted, the resource is hosted on customer-managed infrastructure, such as a compute instance or container image. (Managed, SelfHosted)</td>
</tr>
<tr>
    <td><CopyableCode code="findings_summary" /></td>
    <td><code>array</code></td>
    <td>An aggregated view of security findings associated with a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region that recorded the resource data in Security Hub. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_category" /></td>
    <td><code>string</code></td>
    <td>The grouping where the resource belongs. (Compute, Database, Storage, Code, AI/ML, Identity, Network, Messaging, Other)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_cloud_partition" /></td>
    <td><code>string</code></td>
    <td>The cloud partition where the resource exists. For Amazon Web Services, valid values include aws, aws-cn, and aws-us-gov. This field isn't returned for cloud providers that don't use partitions. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_config" /></td>
    <td><code>object</code></td>
    <td>The configuration details of a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_creation_time_dt" /></td>
    <td><code>string</code></td>
    <td>The time when the resource was created. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_detail_capture_time_dt" /></td>
    <td><code>string</code></td>
    <td>The timestamp when information about the resource was captured. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_guid" /></td>
    <td><code>string</code></td>
    <td>The global identifier used to identify a resource. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for a resource. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_info" /></td>
    <td><code>object</code></td>
    <td>Additional resource-type-specific details. For self-hosted AI resources and their host resources, contains an AIDetails structure.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_owner_account_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the cloud account that owns the resource. For Amazon Web Services resources, this is the Amazon Web Services account ID. For Azure resources, this is the Azure subscription ID. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_owner_org_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the cloud organization that owns the resource. For Amazon Web Services resources, this is the Organizations ID. For Azure resources, this is the Azure tenant ID. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_provider" /></td>
    <td><code>string</code></td>
    <td>The cloud provider where the resource exists. Valid values are AWS and Azure. This field is always included. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_region" /></td>
    <td><code>string</code></td>
    <td>The native cloud region where the resource is located. For Amazon Web Services, this is an Amazon Web Services Region (for example, us-east-1). For Azure resources, this is the Azure region (for example, westus2). This field is always included. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_sub_category" /></td>
    <td><code>string</code></td>
    <td>The AI/ML sub-grouping of the resource. Present only when ResourceCategory is AI/ML. (Model, ModelServing, Agent, AgentFramework, AgentToolsAndIdentity, SafetyAndGuardrail, KnowledgeAndData, OrchestrationAndPipeline, ExternalEndpoint, Development, Other)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_tags" /></td>
    <td><code>array</code></td>
    <td>The key-value pairs associated with a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_resources_v2"><CopyableCode code="get_resources_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of resources. You can use the Scopes parameter to define the data boundary for the query. Currently, Scopes supports AwsOrganizations, which lets you retrieve resources from your entire organization or from specific organizational units. Only the delegated administrator account can use Scopes. You can use the Filters parameter to refine results based on resource attributes. You can use Scopes and Filters independently or together. When both are provided, Scopes narrows the data set first, and then Filters refines results within that scoped data set. For AI/ML resources, the response includes the ResourceSubCategory field. For self-hosted AI resources and their host resources, the response also includes ResourceInfo with AI-specific details. Self-hosted AI resources use a ResourceType with the SelfHosted::AI:: prefix, such as SelfHosted::AI::Model, SelfHosted::AI::Agent, SelfHosted::AI::InferenceEndpoint, and SelfHosted::AI::ExternalEndpoint. If you filter by ResourceSubCategory, you must also include a ResourceCategory string filter with comparison set to EQUALS and value AI/ML in the same request.</td>
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
    defaultValue="get_resources_v2"
    values={[
        { label: 'get_resources_v2', value: 'get_resources_v2' }
    ]}
>
<TabItem value="get_resources_v2">

Returns a list of resources. You can use the Scopes parameter to define the data boundary for the query. Currently, Scopes supports AwsOrganizations, which lets you retrieve resources from your entire organization or from specific organizational units. Only the delegated administrator account can use Scopes. You can use the Filters parameter to refine results based on resource attributes. You can use Scopes and Filters independently or together. When both are provided, Scopes narrows the data set first, and then Filters refines results within that scoped data set. For AI/ML resources, the response includes the ResourceSubCategory field. For self-hosted AI resources and their host resources, the response also includes ResourceInfo with AI-specific details. Self-hosted AI resources use a ResourceType with the SelfHosted::AI:: prefix, such as SelfHosted::AI::Model, SelfHosted::AI::Agent, SelfHosted::AI::InferenceEndpoint, and SelfHosted::AI::ExternalEndpoint. If you filter by ResourceSubCategory, you must also include a ResourceCategory string filter with comparison set to EQUALS and value AI/ML in the same request.

```sql
SELECT
account_id,
account_name,
discovery_type,
findings_summary,
region,
resource_category,
resource_cloud_partition,
resource_config,
resource_creation_time_dt,
resource_detail_capture_time_dt,
resource_guid,
resource_id,
resource_info,
resource_name,
resource_owner_account_id,
resource_owner_org_id,
resource_provider,
resource_region,
resource_sub_category,
resource_tags,
resource_type
FROM aws.securityhub.resources_v2s
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
