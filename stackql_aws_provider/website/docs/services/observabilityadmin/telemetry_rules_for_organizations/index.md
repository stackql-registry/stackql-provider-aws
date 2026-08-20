--- 
title: telemetry_rules_for_organizations
hide_title: false
hide_table_of_contents: false
keywords:
  - telemetry_rules_for_organizations
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

Creates, updates, deletes, gets or lists a <code>telemetry_rules_for_organizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="telemetry_rules_for_organizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.observabilityadmin.telemetry_rules_for_organizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_telemetry_rules_for_organization"
    values={[
        { label: 'list_telemetry_rules_for_organization', value: 'list_telemetry_rules_for_organization' }
    ]}
>
<TabItem value="list_telemetry_rules_for_organization">

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
    <td><CopyableCode code="created_time_stamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the telemetry rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_time_stamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the telemetry rule was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of Amazon Web Services resource the rule applies to. (AWS::EC2::Instance, AWS::EC2::VPC, AWS::Lambda::Function, AWS::CloudTrail, AWS::EKS::Cluster, AWS::WAFv2::WebACL, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Route53Resolver::ResolverEndpoint, AWS::BedrockAgentCore::Runtime, AWS::BedrockAgentCore::Browser, AWS::BedrockAgentCore::CodeInterpreter, AWS::BedrockAgentCore::Gateway, AWS::BedrockAgentCore::Memory, AWS::BedrockAgentCore::WorkloadIdentity, AWS::SecurityHub::Hub, AWS::CloudFront::Distribution, AWS::SecurityHub::HubV2, AWS::CloudWatch::OTelEnrichment, AWS::MSK::Cluster, AWS::S3::Bucket, AWS::Bedrock::KnowledgeBase)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the telemetry rule. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9\-&#93;+)?:(&#91;a-zA-Z0-9\-&#93;+):(&#91;a-z0-9\-&#93;+)?:(&#91;0-9&#93;&#123;12&#125;)?:(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_name" /></td>
    <td><code>string</code></td>
    <td>The name of the telemetry rule. (pattern: &lt;code&gt;&#91;0-9A-Za-z-_.#/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="telemetry_source_types" /></td>
    <td><code>array</code></td>
    <td>The types of telemetry sources configured for this rule, such as VPC Flow Logs or EKS audit logs. TelemetrySourceTypes must be correlated with the specific resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="telemetry_type" /></td>
    <td><code>string</code></td>
    <td>The type of telemetry (Logs, Metrics, or Traces) the rule configures. (Logs, Metrics, Traces)</td>
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
    <td><a href="#list_telemetry_rules_for_organization"><CopyableCode code="list_telemetry_rules_for_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all telemetry rules in your organization. This operation can only be called by the organization's management account or a delegated administrator account.</td>
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
    defaultValue="list_telemetry_rules_for_organization"
    values={[
        { label: 'list_telemetry_rules_for_organization', value: 'list_telemetry_rules_for_organization' }
    ]}
>
<TabItem value="list_telemetry_rules_for_organization">

Lists all telemetry rules in your organization. This operation can only be called by the organization's management account or a delegated administrator account.

```sql
SELECT
created_time_stamp,
last_update_time_stamp,
resource_type,
rule_arn,
rule_name,
telemetry_source_types,
telemetry_type
FROM aws.observabilityadmin.telemetry_rules_for_organizations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
