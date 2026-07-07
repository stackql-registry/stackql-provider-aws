--- 
title: telemetry_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - telemetry_rules
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

Creates, updates, deletes, gets or lists a <code>telemetry_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="telemetry_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.observabilityadmin.telemetry_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_telemetry_rule"
    values={[
        { label: 'get_telemetry_rule', value: 'get_telemetry_rule' },
        { label: 'list_telemetry_rules', value: 'list_telemetry_rules' }
    ]}
>
<TabItem value="get_telemetry_rule">

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
    <td><CopyableCode code="CreatedTimeStamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the telemetry rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="HomeRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the telemetry rule was originally created. For replicated rules in spoke regions, this indicates the region that manages the rule. For rules created without multi-region scope, this field is not present.</td>
</tr>
<tr>
    <td><CopyableCode code="IsReplicated" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this telemetry rule is a replica that was created in this region through multi-region fan-out from the home region. Replicated rules cannot be directly updated or deleted in the spoke region. To modify a replicated rule, make changes in the home region.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdateTimeStamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the telemetry rule was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="RegionStatuses" /></td>
    <td><code>array</code></td>
    <td>A list of per-region replication statuses for the telemetry rule. Each entry indicates the replication status of the rule in a specific spoke region. This field is only present for rules created with multi-region scope.</td>
</tr>
<tr>
    <td><CopyableCode code="RuleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the telemetry rule. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9\-&#93;+)?:(&#91;a-zA-Z0-9\-&#93;+):(&#91;a-z0-9\-&#93;+)?:(&#91;0-9&#93;&#123;12&#125;)?:(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RuleName" /></td>
    <td><code>string</code></td>
    <td>The name of the telemetry rule. (pattern: &lt;code&gt;&#91;0-9A-Za-z-_.#/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TelemetryRule" /></td>
    <td><code>object</code></td>
    <td>Defines how telemetry should be configured for specific Amazon Web Services resources.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_telemetry_rules">

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
    <td><CopyableCode code="CreatedTimeStamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the telemetry rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdateTimeStamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the telemetry rule was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of Amazon Web Services resource the rule applies to. (AWS::EC2::Instance, AWS::EC2::VPC, AWS::Lambda::Function, AWS::CloudTrail, AWS::EKS::Cluster, AWS::WAFv2::WebACL, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Route53Resolver::ResolverEndpoint, AWS::BedrockAgentCore::Runtime, AWS::BedrockAgentCore::Browser, AWS::BedrockAgentCore::CodeInterpreter, AWS::BedrockAgentCore::Gateway, AWS::BedrockAgentCore::Memory, AWS::BedrockAgentCore::WorkloadIdentity, AWS::SecurityHub::Hub, AWS::CloudFront::Distribution, AWS::SecurityHub::HubV2, AWS::CloudWatch::OTelEnrichment, AWS::MSK::Cluster)</td>
</tr>
<tr>
    <td><CopyableCode code="RuleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the telemetry rule. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9\-&#93;+)?:(&#91;a-zA-Z0-9\-&#93;+):(&#91;a-z0-9\-&#93;+)?:(&#91;0-9&#93;&#123;12&#125;)?:(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RuleName" /></td>
    <td><code>string</code></td>
    <td>The name of the telemetry rule. (pattern: &lt;code&gt;&#91;0-9A-Za-z-_.#/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TelemetrySourceTypes" /></td>
    <td><code>array</code></td>
    <td>The types of telemetry sources configured for this rule, such as VPC Flow Logs or EKS audit logs. TelemetrySourceTypes must be correlated with the specific resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="TelemetryType" /></td>
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
    <td><a href="#get_telemetry_rule"><CopyableCode code="get_telemetry_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a specific telemetry rule in your account.</td>
</tr>
<tr>
    <td><a href="#list_telemetry_rules"><CopyableCode code="list_telemetry_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all telemetry rules in your account. You can filter the results by specifying a rule name prefix.</td>
</tr>
<tr>
    <td><a href="#create_telemetry_rule"><CopyableCode code="create_telemetry_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleName"><code>RuleName</code></a>, <a href="#parameter-Rule"><code>Rule</code></a></td>
    <td></td>
    <td>Creates a telemetry rule that defines how telemetry should be configured for Amazon Web Services resources in your account. The rule specifies which resources should have telemetry enabled and how that telemetry data should be collected based on resource type, telemetry type, and selection criteria.</td>
</tr>
<tr>
    <td><a href="#update_telemetry_rule"><CopyableCode code="update_telemetry_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleIdentifier"><code>RuleIdentifier</code></a>, <a href="#parameter-Rule"><code>Rule</code></a></td>
    <td></td>
    <td>Updates an existing telemetry rule in your account. If multiple users attempt to modify the same telemetry rule simultaneously, a ConflictException is returned to provide specific error information for concurrent modification scenarios.</td>
</tr>
<tr>
    <td><a href="#delete_telemetry_rule"><CopyableCode code="delete_telemetry_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a telemetry rule from your account. Any telemetry configurations previously created by the rule will remain but no new resources will be configured by this rule.</td>
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
    defaultValue="get_telemetry_rule"
    values={[
        { label: 'get_telemetry_rule', value: 'get_telemetry_rule' },
        { label: 'list_telemetry_rules', value: 'list_telemetry_rules' }
    ]}
>
<TabItem value="get_telemetry_rule">

Retrieves the details of a specific telemetry rule in your account.

```sql
SELECT
CreatedTimeStamp,
HomeRegion,
IsReplicated,
LastUpdateTimeStamp,
RegionStatuses,
RuleArn,
RuleName,
TelemetryRule
FROM aws.observabilityadmin.telemetry_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_telemetry_rules">

Lists all telemetry rules in your account. You can filter the results by specifying a rule name prefix.

```sql
SELECT
CreatedTimeStamp,
LastUpdateTimeStamp,
ResourceType,
RuleArn,
RuleName,
TelemetrySourceTypes,
TelemetryType
FROM aws.observabilityadmin.telemetry_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_telemetry_rule"
    values={[
        { label: 'create_telemetry_rule', value: 'create_telemetry_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_telemetry_rule">

Creates a telemetry rule that defines how telemetry should be configured for Amazon Web Services resources in your account. The rule specifies which resources should have telemetry enabled and how that telemetry data should be collected based on resource type, telemetry type, and selection criteria.

```sql
INSERT INTO aws.observabilityadmin.telemetry_rules (
RuleName,
Rule,
Tags,
region
)
SELECT 
'{{ RuleName }}' /* required */,
'{{ Rule }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
RuleArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: telemetry_rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the telemetry_rules resource.
    - name: RuleName
      value: "{{ RuleName }}"
    - name: Rule
      description: |
        Defines how telemetry should be configured for specific Amazon Web Services resources.
      value:
        ResourceType: "{{ ResourceType }}"
        TelemetryType: "{{ TelemetryType }}"
        TelemetrySourceTypes:
          - "{{ TelemetrySourceTypes }}"
        DestinationConfiguration:
          DestinationType: "{{ DestinationType }}"
          DestinationPattern: "{{ DestinationPattern }}"
          RetentionInDays: {{ RetentionInDays }}
          VPCFlowLogParameters:
            LogFormat: "{{ LogFormat }}"
            TrafficType: "{{ TrafficType }}"
            MaxAggregationInterval: {{ MaxAggregationInterval }}
          CloudtrailParameters:
            AdvancedEventSelectors:
              - Name: "{{ Name }}"
                FieldSelectors: "{{ FieldSelectors }}"
          ELBLoadBalancerLoggingParameters:
            OutputFormat: "{{ OutputFormat }}"
            FieldDelimiter: "{{ FieldDelimiter }}"
          WAFLoggingParameters:
            RedactedFields:
              - SingleHeader:
                  Name: "{{ Name }}"
                UriPath: "{{ UriPath }}"
                QueryString: "{{ QueryString }}"
                Method: "{{ Method }}"
            LoggingFilter:
              Filters:
                - Behavior: "{{ Behavior }}"
                  Requirement: "{{ Requirement }}"
                  Conditions: "{{ Conditions }}"
              DefaultBehavior: "{{ DefaultBehavior }}"
            LogType: "{{ LogType }}"
          LogDeliveryParameters:
            LogTypes:
              - "{{ LogTypes }}"
          MskMonitoringParameters:
            EnhancedMonitoring: "{{ EnhancedMonitoring }}"
        Scope: "{{ Scope }}"
        SelectionCriteria: "{{ SelectionCriteria }}"
        AllowFieldUpdates: {{ AllowFieldUpdates }}
        Regions:
          - "{{ Regions }}"
        AllRegions: {{ AllRegions }}
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_telemetry_rule"
    values={[
        { label: 'update_telemetry_rule', value: 'update_telemetry_rule' }
    ]}
>
<TabItem value="update_telemetry_rule">

Updates an existing telemetry rule in your account. If multiple users attempt to modify the same telemetry rule simultaneously, a ConflictException is returned to provide specific error information for concurrent modification scenarios.

```sql
UPDATE aws.observabilityadmin.telemetry_rules
SET 
RuleIdentifier = '{{ RuleIdentifier }}',
Rule = '{{ Rule }}'
WHERE 
region = '{{ region }}' --required
AND RuleIdentifier = '{{ RuleIdentifier }}' --required
AND Rule = '{{ Rule }}' --required
RETURNING
RuleArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_telemetry_rule"
    values={[
        { label: 'delete_telemetry_rule', value: 'delete_telemetry_rule' }
    ]}
>
<TabItem value="delete_telemetry_rule">

Deletes a telemetry rule from your account. Any telemetry configurations previously created by the rule will remain but no new resources will be configured by this rule.

```sql
DELETE FROM aws.observabilityadmin.telemetry_rules
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
