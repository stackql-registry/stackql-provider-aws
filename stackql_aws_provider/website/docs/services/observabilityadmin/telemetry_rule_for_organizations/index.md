--- 
title: telemetry_rule_for_organizations
hide_title: false
hide_table_of_contents: false
keywords:
  - telemetry_rule_for_organizations
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

Creates, updates, deletes, gets or lists a <code>telemetry_rule_for_organizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="telemetry_rule_for_organizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.observabilityadmin.telemetry_rule_for_organizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_telemetry_rule_for_organization"
    values={[
        { label: 'get_telemetry_rule_for_organization', value: 'get_telemetry_rule_for_organization' }
    ]}
>
<TabItem value="get_telemetry_rule_for_organization">

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
    <td>The timestamp when the organization telemetry rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="home_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the organization telemetry rule was originally created. For replicated rules in spoke regions, this indicates the region that manages the rule. For rules created without multi-region scope, this field is not present.</td>
</tr>
<tr>
    <td><CopyableCode code="is_replicated" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this organization telemetry rule is a replica that was created in this region through multi-region fan-out from the home region. Replicated rules cannot be directly updated or deleted in the spoke region. To modify a replicated rule, make changes in the home region.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_time_stamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the organization telemetry rule was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="region_statuses" /></td>
    <td><code>array</code></td>
    <td>A list of per-region replication statuses for the organization telemetry rule. Each entry indicates the replication status of the rule in a specific spoke region. This field is only present for rules created with multi-region scope.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the organization telemetry rule. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9\-&#93;+)?:(&#91;a-zA-Z0-9\-&#93;+):(&#91;a-z0-9\-&#93;+)?:(&#91;0-9&#93;&#123;12&#125;)?:(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_name" /></td>
    <td><code>string</code></td>
    <td>The name of the organization telemetry rule. (pattern: &lt;code&gt;&#91;0-9A-Za-z-_.#/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="telemetry_rule" /></td>
    <td><code>object</code></td>
    <td>Defines how telemetry should be configured for specific Amazon Web Services resources.</td>
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
    <td><a href="#get_telemetry_rule_for_organization"><CopyableCode code="get_telemetry_rule_for_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a specific organization telemetry rule. This operation can only be called by the organization's management account or a delegated administrator account.</td>
</tr>
<tr>
    <td><a href="#create_telemetry_rule_for_organization"><CopyableCode code="create_telemetry_rule_for_organization" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleName"><code>RuleName</code></a>, <a href="#parameter-Rule"><code>Rule</code></a></td>
    <td></td>
    <td>Creates a telemetry rule that applies across an Amazon Web Services Organization. This operation can only be called by the organization's management account or a delegated administrator account.</td>
</tr>
<tr>
    <td><a href="#update_telemetry_rule_for_organization"><CopyableCode code="update_telemetry_rule_for_organization" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleIdentifier"><code>RuleIdentifier</code></a>, <a href="#parameter-Rule"><code>Rule</code></a></td>
    <td></td>
    <td>Updates an existing telemetry rule that applies across an Amazon Web Services Organization. This operation can only be called by the organization's management account or a delegated administrator account.</td>
</tr>
<tr>
    <td><a href="#delete_telemetry_rule_for_organization"><CopyableCode code="delete_telemetry_rule_for_organization" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an organization-wide telemetry rule. This operation can only be called by the organization's management account or a delegated administrator account.</td>
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
    defaultValue="get_telemetry_rule_for_organization"
    values={[
        { label: 'get_telemetry_rule_for_organization', value: 'get_telemetry_rule_for_organization' }
    ]}
>
<TabItem value="get_telemetry_rule_for_organization">

Retrieves the details of a specific organization telemetry rule. This operation can only be called by the organization's management account or a delegated administrator account.

```sql
SELECT
created_time_stamp,
home_region,
is_replicated,
last_update_time_stamp,
region_statuses,
rule_arn,
rule_name,
telemetry_rule
FROM aws.observabilityadmin.telemetry_rule_for_organizations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_telemetry_rule_for_organization"
    values={[
        { label: 'create_telemetry_rule_for_organization', value: 'create_telemetry_rule_for_organization' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_telemetry_rule_for_organization">

Creates a telemetry rule that applies across an Amazon Web Services Organization. This operation can only be called by the organization's management account or a delegated administrator account.

```sql
INSERT INTO aws.observabilityadmin.telemetry_rule_for_organizations (
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
rule_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: telemetry_rule_for_organizations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the telemetry_rule_for_organizations resource.
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
    defaultValue="update_telemetry_rule_for_organization"
    values={[
        { label: 'update_telemetry_rule_for_organization', value: 'update_telemetry_rule_for_organization' }
    ]}
>
<TabItem value="update_telemetry_rule_for_organization">

Updates an existing telemetry rule that applies across an Amazon Web Services Organization. This operation can only be called by the organization's management account or a delegated administrator account.

```sql
UPDATE aws.observabilityadmin.telemetry_rule_for_organizations
SET 
RuleIdentifier = '{{ RuleIdentifier }}',
Rule = '{{ Rule }}'
WHERE 
region = '{{ region }}' --required
AND RuleIdentifier = '{{ RuleIdentifier }}' --required
AND Rule = '{{ Rule }}' --required
RETURNING
rule_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_telemetry_rule_for_organization"
    values={[
        { label: 'delete_telemetry_rule_for_organization', value: 'delete_telemetry_rule_for_organization' }
    ]}
>
<TabItem value="delete_telemetry_rule_for_organization">

Deletes an organization-wide telemetry rule. This operation can only be called by the organization's management account or a delegated administrator account.

```sql
DELETE FROM aws.observabilityadmin.telemetry_rule_for_organizations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
