--- 
title: workgroups
hide_title: false
hide_table_of_contents: false
keywords:
  - workgroups
  - redshift_serverless
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

Creates, updates, deletes, gets or lists a <code>workgroups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workgroups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift_serverless.workgroups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workgroup"
    values={[
        { label: 'get_workgroup', value: 'get_workgroup' },
        { label: 'list_workgroups', value: 'list_workgroups' }
    ]}
>
<TabItem value="get_workgroup">

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
    <td><CopyableCode code="base_capacity" /></td>
    <td><code>integer</code></td>
    <td>The base data warehouse capacity of the workgroup in Redshift Processing Units (RPUs).</td>
</tr>
<tr>
    <td><CopyableCode code="config_parameters" /></td>
    <td><code>array</code></td>
    <td>An array of parameters to set for advanced control over a database. The options are auto_mv, datestyle, enable_case_sensitive_identifier, enable_user_activity_logging, query_group, search_path, require_ssl, use_fips_ssl, and either wlm_json_configuration or query monitoring metrics that let you define performance boundaries. You can either specify individual query monitoring metrics (such as max_scan_row_count, max_query_execution_time) or use wlm_json_configuration to define query queues with rules, but not both. If you're using wlm_json_configuration, the maximum size of parameterValue is 8000 characters. For more information about query monitoring rules and available metrics, see Query monitoring metrics for Amazon Redshift Serverless.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date of the workgroup.</td>
</tr>
<tr>
    <td><CopyableCode code="cross_account_vpcs" /></td>
    <td><code>array</code></td>
    <td>A list of VPCs. Each entry is the unique identifier of a virtual private cloud with access to Amazon Redshift Serverless. If all of the VPCs for the grantee are allowed, it shows an asterisk.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_domain_certificate_arn" /></td>
    <td><code>string</code></td>
    <td>The custom domain name’s certificate Amazon resource name (ARN). (pattern: &lt;code&gt;arn:&#91;\w+=/,.@-&#93;+:acm:&#91;\w+=/,.@-&#93;*:&#91;0-9&#93;+:&#91;\w+=,.@-&#93;+(/&#91;\w+=,.@-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="custom_domain_certificate_expiry_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The expiration time for the certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_domain_name" /></td>
    <td><code>string</code></td>
    <td>The custom domain name associated with the workgroup. (pattern: &lt;code&gt;^(((?!-)&#91;A-Za-z0-9-&#93;&#123;0,62&#125;&#91;A-Za-z0-9&#93;)\.)+((?!-)&#91;A-Za-z0-9-&#93;&#123;1,62&#125;&#91;A-Za-z0-9&#93;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>object</code></td>
    <td>The endpoint that is created from the workgroup.</td>
</tr>
<tr>
    <td><CopyableCode code="enhanced_vpc_routing" /></td>
    <td><code>boolean</code></td>
    <td>The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="extra_compute_for_automatic_optimization" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value that, if true, indicates that the workgroup allocates additional compute resources to run automatic optimization operations. Default: false</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address_type" /></td>
    <td><code>string</code></td>
    <td>The IP address type that the workgroup supports. Possible values are ipv4 and dualstack. (pattern: &lt;code&gt;^(ipv4|dualstack)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="max_capacity" /></td>
    <td><code>integer</code></td>
    <td>The maximum data-warehouse capacity Amazon Redshift Serverless uses to serve queries. The max capacity is specified in RPUs.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_name" /></td>
    <td><code>string</code></td>
    <td>The namespace the workgroup is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="patch_version" /></td>
    <td><code>string</code></td>
    <td>The patch version of your Amazon Redshift Serverless workgroup. For more information about patch versions, see Cluster versions for Amazon Redshift.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_track_name" /></td>
    <td><code>string</code></td>
    <td>The name for the track that you want to assign to the workgroup. When the track changes, the workgroup is switched to the latest workgroup release available for the track. At this point, the track name is applied. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.</td>
</tr>
<tr>
    <td><CopyableCode code="price_performance_target" /></td>
    <td><code>object</code></td>
    <td>An object that represents the price performance target settings for the workgroup.</td>
</tr>
<tr>
    <td><CopyableCode code="publicly_accessible" /></td>
    <td><code>boolean</code></td>
    <td>A value that specifies whether the workgroup can be accessible from a public network.</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_ids" /></td>
    <td><code>array</code></td>
    <td>An array of security group IDs to associate with the workgroup.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the workgroup. (CREATING, AVAILABLE, MODIFYING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_ids" /></td>
    <td><code>array</code></td>
    <td>An array of subnet IDs the workgroup is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="track_name" /></td>
    <td><code>string</code></td>
    <td>The name of the track for the workgroup. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workgroup_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that links to the workgroup.</td>
</tr>
<tr>
    <td><CopyableCode code="workgroup_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the workgroup.</td>
</tr>
<tr>
    <td><CopyableCode code="workgroup_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workgroup. (pattern: &lt;code&gt;^&#91;a-z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workgroup_version" /></td>
    <td><code>string</code></td>
    <td>The Amazon Redshift Serverless version of your workgroup. For more information about Amazon Redshift Serverless versions, seeCluster versions for Amazon Redshift.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workgroups">

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
    <td><CopyableCode code="base_capacity" /></td>
    <td><code>integer</code></td>
    <td>The base data warehouse capacity of the workgroup in Redshift Processing Units (RPUs).</td>
</tr>
<tr>
    <td><CopyableCode code="config_parameters" /></td>
    <td><code>array</code></td>
    <td>An array of parameters to set for advanced control over a database. The options are auto_mv, datestyle, enable_case_sensitive_identifier, enable_user_activity_logging, query_group, search_path, require_ssl, use_fips_ssl, and either wlm_json_configuration or query monitoring metrics that let you define performance boundaries. You can either specify individual query monitoring metrics (such as max_scan_row_count, max_query_execution_time) or use wlm_json_configuration to define query queues with rules, but not both. If you're using wlm_json_configuration, the maximum size of parameterValue is 8000 characters. For more information about query monitoring rules and available metrics, see Query monitoring metrics for Amazon Redshift Serverless.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date of the workgroup.</td>
</tr>
<tr>
    <td><CopyableCode code="cross_account_vpcs" /></td>
    <td><code>array</code></td>
    <td>A list of VPCs. Each entry is the unique identifier of a virtual private cloud with access to Amazon Redshift Serverless. If all of the VPCs for the grantee are allowed, it shows an asterisk.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_domain_certificate_arn" /></td>
    <td><code>string</code></td>
    <td>The custom domain name’s certificate Amazon resource name (ARN). (pattern: &lt;code&gt;arn:&#91;\w+=/,.@-&#93;+:acm:&#91;\w+=/,.@-&#93;*:&#91;0-9&#93;+:&#91;\w+=,.@-&#93;+(/&#91;\w+=,.@-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="custom_domain_certificate_expiry_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The expiration time for the certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_domain_name" /></td>
    <td><code>string</code></td>
    <td>The custom domain name associated with the workgroup. (pattern: &lt;code&gt;^(((?!-)&#91;A-Za-z0-9-&#93;&#123;0,62&#125;&#91;A-Za-z0-9&#93;)\.)+((?!-)&#91;A-Za-z0-9-&#93;&#123;1,62&#125;&#91;A-Za-z0-9&#93;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>object</code></td>
    <td>The endpoint that is created from the workgroup.</td>
</tr>
<tr>
    <td><CopyableCode code="enhanced_vpc_routing" /></td>
    <td><code>boolean</code></td>
    <td>The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="extra_compute_for_automatic_optimization" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value that, if true, indicates that the workgroup allocates additional compute resources to run automatic optimization operations. Default: false</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address_type" /></td>
    <td><code>string</code></td>
    <td>The IP address type that the workgroup supports. Possible values are ipv4 and dualstack. (pattern: &lt;code&gt;^(ipv4|dualstack)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="max_capacity" /></td>
    <td><code>integer</code></td>
    <td>The maximum data-warehouse capacity Amazon Redshift Serverless uses to serve queries. The max capacity is specified in RPUs.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_name" /></td>
    <td><code>string</code></td>
    <td>The namespace the workgroup is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="patch_version" /></td>
    <td><code>string</code></td>
    <td>The patch version of your Amazon Redshift Serverless workgroup. For more information about patch versions, see Cluster versions for Amazon Redshift.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_track_name" /></td>
    <td><code>string</code></td>
    <td>The name for the track that you want to assign to the workgroup. When the track changes, the workgroup is switched to the latest workgroup release available for the track. At this point, the track name is applied. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.</td>
</tr>
<tr>
    <td><CopyableCode code="price_performance_target" /></td>
    <td><code>object</code></td>
    <td>An object that represents the price performance target settings for the workgroup.</td>
</tr>
<tr>
    <td><CopyableCode code="publicly_accessible" /></td>
    <td><code>boolean</code></td>
    <td>A value that specifies whether the workgroup can be accessible from a public network.</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_ids" /></td>
    <td><code>array</code></td>
    <td>An array of security group IDs to associate with the workgroup.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the workgroup. (CREATING, AVAILABLE, MODIFYING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_ids" /></td>
    <td><code>array</code></td>
    <td>An array of subnet IDs the workgroup is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="track_name" /></td>
    <td><code>string</code></td>
    <td>The name of the track for the workgroup. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workgroup_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that links to the workgroup.</td>
</tr>
<tr>
    <td><CopyableCode code="workgroup_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the workgroup.</td>
</tr>
<tr>
    <td><CopyableCode code="workgroup_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workgroup. (pattern: &lt;code&gt;^&#91;a-z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workgroup_version" /></td>
    <td><code>string</code></td>
    <td>The Amazon Redshift Serverless version of your workgroup. For more information about Amazon Redshift Serverless versions, seeCluster versions for Amazon Redshift.</td>
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
    <td><a href="#get_workgroup"><CopyableCode code="get_workgroup" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific workgroup.</td>
</tr>
<tr>
    <td><a href="#list_workgroups"><CopyableCode code="list_workgroups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a list of specified workgroups.</td>
</tr>
<tr>
    <td><a href="#create_workgroup"><CopyableCode code="create_workgroup" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-workgroupName"><code>workgroupName</code></a></td>
    <td></td>
    <td>Creates an workgroup in Amazon Redshift Serverless. VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. If a workgroup is in an account with VPC BPA turned on, the following capabilities are blocked: Creating a public access workgroup Modifying a private workgroup to public Adding a subnet with VPC BPA turned on to the workgroup when the workgroup is public For more information about VPC BPA, see Block public access to VPCs and subnets in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#update_workgroup"><CopyableCode code="update_workgroup" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-workgroupName"><code>workgroupName</code></a></td>
    <td></td>
    <td>Updates a workgroup with the specified configuration settings. You can't update multiple parameters in one request. For example, you can update baseCapacity or port in a single request, but you can't update both in the same request. VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. If a workgroup is in an account with VPC BPA turned on, the following capabilities are blocked: Creating a public access workgroup Modifying a private workgroup to public Adding a subnet with VPC BPA turned on to the workgroup when the workgroup is public For more information about VPC BPA, see Block public access to VPCs and subnets in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_workgroup"><CopyableCode code="delete_workgroup" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a workgroup.</td>
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
    defaultValue="get_workgroup"
    values={[
        { label: 'get_workgroup', value: 'get_workgroup' },
        { label: 'list_workgroups', value: 'list_workgroups' }
    ]}
>
<TabItem value="get_workgroup">

Returns information about a specific workgroup.

```sql
SELECT
base_capacity,
config_parameters,
creation_date,
cross_account_vpcs,
custom_domain_certificate_arn,
custom_domain_certificate_expiry_time,
custom_domain_name,
endpoint,
enhanced_vpc_routing,
extra_compute_for_automatic_optimization,
ip_address_type,
max_capacity,
namespace_name,
patch_version,
pending_track_name,
port,
price_performance_target,
publicly_accessible,
security_group_ids,
status,
subnet_ids,
track_name,
workgroup_arn,
workgroup_id,
workgroup_name,
workgroup_version
FROM aws.redshift_serverless.workgroups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workgroups">

Returns information about a list of specified workgroups.

```sql
SELECT
base_capacity,
config_parameters,
creation_date,
cross_account_vpcs,
custom_domain_certificate_arn,
custom_domain_certificate_expiry_time,
custom_domain_name,
endpoint,
enhanced_vpc_routing,
extra_compute_for_automatic_optimization,
ip_address_type,
max_capacity,
namespace_name,
patch_version,
pending_track_name,
port,
price_performance_target,
publicly_accessible,
security_group_ids,
status,
subnet_ids,
track_name,
workgroup_arn,
workgroup_id,
workgroup_name,
workgroup_version
FROM aws.redshift_serverless.workgroups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workgroup"
    values={[
        { label: 'create_workgroup', value: 'create_workgroup' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workgroup">

Creates an workgroup in Amazon Redshift Serverless. VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. If a workgroup is in an account with VPC BPA turned on, the following capabilities are blocked: Creating a public access workgroup Modifying a private workgroup to public Adding a subnet with VPC BPA turned on to the workgroup when the workgroup is public For more information about VPC BPA, see Block public access to VPCs and subnets in the Amazon VPC User Guide.

```sql
INSERT INTO aws.redshift_serverless.workgroups (
baseCapacity,
configParameters,
enhancedVpcRouting,
extraComputeForAutomaticOptimization,
ipAddressType,
maxCapacity,
namespaceName,
port,
pricePerformanceTarget,
publiclyAccessible,
securityGroupIds,
subnetIds,
tags,
trackName,
workgroupName,
region
)
SELECT 
{{ baseCapacity }},
'{{ configParameters }}',
{{ enhancedVpcRouting }},
{{ extraComputeForAutomaticOptimization }},
'{{ ipAddressType }}',
{{ maxCapacity }},
'{{ namespaceName }}' /* required */,
{{ port }},
'{{ pricePerformanceTarget }}',
{{ publiclyAccessible }},
'{{ securityGroupIds }}',
'{{ subnetIds }}',
'{{ tags }}',
'{{ trackName }}',
'{{ workgroupName }}' /* required */,
'{{ region }}'
RETURNING
workgroup
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workgroups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workgroups resource.
    - name: baseCapacity
      value: {{ baseCapacity }}
      description: |
        The base data warehouse capacity of the workgroup in Redshift Processing Units (RPUs).
    - name: configParameters
      description: |
        An array of parameters to set for advanced control over a database. The options are auto_mv, datestyle, enable_case_sensitive_identifier, enable_user_activity_logging, query_group, search_path, require_ssl, use_fips_ssl, and either wlm_json_configuration or query monitoring metrics that let you define performance boundaries. You can either specify individual query monitoring metrics (such as max_scan_row_count, max_query_execution_time) or use wlm_json_configuration to define query queues with rules, but not both. If you're using wlm_json_configuration, the maximum size of parameterValue is 8000 characters. For more information about query monitoring rules and available metrics, see Query monitoring metrics for Amazon Redshift Serverless.
      value:
        - parameterKey: "{{ parameterKey }}"
          parameterValue: "{{ parameterValue }}"
    - name: enhancedVpcRouting
      value: {{ enhancedVpcRouting }}
      description: |
        The value that specifies whether to turn on enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC instead of over the internet.
    - name: extraComputeForAutomaticOptimization
      value: {{ extraComputeForAutomaticOptimization }}
      description: |
        If true, allocates additional compute resources for running automatic optimization operations. Default: false
    - name: ipAddressType
      value: "{{ ipAddressType }}"
      description: |
        The IP address type that the workgroup supports. Possible values are ipv4 and dualstack.
    - name: maxCapacity
      value: {{ maxCapacity }}
      description: |
        The maximum data-warehouse capacity Amazon Redshift Serverless uses to serve queries. The max capacity is specified in RPUs.
    - name: namespaceName
      value: "{{ namespaceName }}"
      description: |
        The name of the namespace to associate with the workgroup.
    - name: port
      value: {{ port }}
      description: |
        The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.
    - name: pricePerformanceTarget
      description: |
        An object that represents the price performance target settings for the workgroup.
      value:
        level: {{ level }}
        status: "{{ status }}"
    - name: publiclyAccessible
      value: {{ publiclyAccessible }}
      description: |
        A value that specifies whether the workgroup can be accessed from a public network.
    - name: securityGroupIds
      value:
        - "{{ securityGroupIds }}"
      description: |
        An array of security group IDs to associate with the workgroup.
    - name: subnetIds
      value:
        - "{{ subnetIds }}"
      description: |
        An array of VPC subnet IDs to associate with the workgroup.
    - name: tags
      description: |
        A array of tag instances.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: trackName
      value: "{{ trackName }}"
      description: |
        An optional parameter for the name of the track for the workgroup. If you don't provide a track name, the workgroup is assigned to the current track.
    - name: workgroupName
      value: "{{ workgroupName }}"
      description: |
        The name of the created workgroup.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workgroup"
    values={[
        { label: 'update_workgroup', value: 'update_workgroup' }
    ]}
>
<TabItem value="update_workgroup">

Updates a workgroup with the specified configuration settings. You can't update multiple parameters in one request. For example, you can update baseCapacity or port in a single request, but you can't update both in the same request. VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. If a workgroup is in an account with VPC BPA turned on, the following capabilities are blocked: Creating a public access workgroup Modifying a private workgroup to public Adding a subnet with VPC BPA turned on to the workgroup when the workgroup is public For more information about VPC BPA, see Block public access to VPCs and subnets in the Amazon VPC User Guide.

```sql
UPDATE aws.redshift_serverless.workgroups
SET 
baseCapacity = {{ baseCapacity }},
configParameters = '{{ configParameters }}',
enhancedVpcRouting = {{ enhancedVpcRouting }},
extraComputeForAutomaticOptimization = {{ extraComputeForAutomaticOptimization }},
ipAddressType = '{{ ipAddressType }}',
maxCapacity = {{ maxCapacity }},
port = {{ port }},
pricePerformanceTarget = '{{ pricePerformanceTarget }}',
publiclyAccessible = {{ publiclyAccessible }},
securityGroupIds = '{{ securityGroupIds }}',
subnetIds = '{{ subnetIds }}',
trackName = '{{ trackName }}',
workgroupName = '{{ workgroupName }}'
WHERE 
region = '{{ region }}' --required
AND workgroupName = '{{ workgroupName }}' --required
RETURNING
workgroup;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workgroup"
    values={[
        { label: 'delete_workgroup', value: 'delete_workgroup' }
    ]}
>
<TabItem value="delete_workgroup">

Deletes a workgroup.

```sql
DELETE FROM aws.redshift_serverless.workgroups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
