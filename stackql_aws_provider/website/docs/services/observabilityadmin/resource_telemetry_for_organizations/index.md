--- 
title: resource_telemetry_for_organizations
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_telemetry_for_organizations
  - observabilityadmin
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

Creates, updates, deletes, gets or lists a <code>resource_telemetry_for_organizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_telemetry_for_organizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.observabilityadmin.resource_telemetry_for_organizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resource_telemetry_for_organization"
    values={[
        { label: 'list_resource_telemetry_for_organization', value: 'list_resource_telemetry_for_organization' }
    ]}
>
<TabItem value="list_resource_telemetry_for_organization">

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
    <td><CopyableCode code="account_identifier" /></td>
    <td><code>string</code></td>
    <td>The account ID which contains the resource managed in telemetry configuration. An example of a valid account ID is 012345678901. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_time_stamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp of the last change to the telemetry configuration for the resource. For example, 1728679196318.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the resource, for example for Amazon VPC, it would be vpc-1a2b3c4d5e6f1a2b3.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_tags" /></td>
    <td><code>object</code></td>
    <td>Tags associated with the resource, for example &#123; Name: "ExampleInstance", Environment: "Development" &#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource, for example Amazon Web Services::EC2::Instance, or Amazon Web Services::EKS::Cluster, etc. (AWS::EC2::Instance, AWS::EC2::VPC, AWS::Lambda::Function, AWS::CloudTrail, AWS::EKS::Cluster, AWS::WAFv2::WebACL, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Route53Resolver::ResolverEndpoint, AWS::BedrockAgentCore::Runtime, AWS::BedrockAgentCore::Browser, AWS::BedrockAgentCore::CodeInterpreter, AWS::BedrockAgentCore::Gateway, AWS::BedrockAgentCore::Memory, AWS::BedrockAgentCore::WorkloadIdentity, AWS::SecurityHub::Hub, AWS::CloudFront::Distribution, AWS::SecurityHub::HubV2, AWS::CloudWatch::OTelEnrichment, AWS::MSK::Cluster, AWS::S3::Bucket, AWS::Bedrock::KnowledgeBase)</td>
</tr>
<tr>
    <td><CopyableCode code="telemetry_configuration_state" /></td>
    <td><code>object</code></td>
    <td>The configuration state for the resource, for example &#123; Logs: NotApplicable; Metrics: Enabled; Traces: NotApplicable; &#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="telemetry_source_type" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of telemetry source for a resource, such as EKS cluster logs. (VPC_FLOW_LOGS, ROUTE53_RESOLVER_QUERY_LOGS, EKS_AUDIT_LOGS, EKS_AUTHENTICATOR_LOGS, EKS_CONTROLLER_MANAGER_LOGS, EKS_SCHEDULER_LOGS, EKS_API_LOGS)</td>
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
    <td><a href="#list_resource_telemetry_for_organization"><CopyableCode code="list_resource_telemetry_for_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of telemetry configurations for Amazon Web Services resources supported by telemetry config in the organization.</td>
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
    defaultValue="list_resource_telemetry_for_organization"
    values={[
        { label: 'list_resource_telemetry_for_organization', value: 'list_resource_telemetry_for_organization' }
    ]}
>
<TabItem value="list_resource_telemetry_for_organization">

Returns a list of telemetry configurations for Amazon Web Services resources supported by telemetry config in the organization.

```sql
SELECT
account_identifier,
last_update_time_stamp,
resource_identifier,
resource_tags,
resource_type,
telemetry_configuration_state,
telemetry_source_type
FROM aws.observabilityadmin.resource_telemetry_for_organizations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
