--- 
title: protections
hide_title: false
hide_table_of_contents: false
keywords:
  - protections
  - shield
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

Creates, updates, deletes, gets or lists a <code>protections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="protections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.shield.protections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_protection"
    values={[
        { label: 'describe_protection', value: 'describe_protection' },
        { label: 'list_protections', value: 'list_protections' }
    ]}
>
<TabItem value="describe_protection">

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
    <td><CopyableCode code="application_layer_automatic_response_configuration" /></td>
    <td><code>object</code></td>
    <td>The automatic application layer DDoS mitigation settings for the protection. This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks.</td>
</tr>
<tr>
    <td><CopyableCode code="health_check_ids" /></td>
    <td><code>array</code></td>
    <td>The unique identifier (ID) for the Route 53 health check that's associated with the protection.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ID) of the protection. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the protection. For example, My CloudFront distributions. (pattern: &lt;code&gt;&#91; a-zA-Z0-9_\\.\\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="protection_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the protection. (pattern: &lt;code&gt;^arn:aws.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the Amazon Web Services resource that is protected. (pattern: &lt;code&gt;^arn:aws.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_protections">

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
    <td><CopyableCode code="application_layer_automatic_response_configuration" /></td>
    <td><code>object</code></td>
    <td>The automatic application layer DDoS mitigation settings for the protection. This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks.</td>
</tr>
<tr>
    <td><CopyableCode code="health_check_ids" /></td>
    <td><code>array</code></td>
    <td>The unique identifier (ID) for the Route 53 health check that's associated with the protection.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ID) of the protection. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the protection. For example, My CloudFront distributions. (pattern: &lt;code&gt;&#91; a-zA-Z0-9_\\.\\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="protection_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the protection. (pattern: &lt;code&gt;^arn:aws.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the Amazon Web Services resource that is protected. (pattern: &lt;code&gt;^arn:aws.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_protection"><CopyableCode code="describe_protection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the details of a Protection object.</td>
</tr>
<tr>
    <td><a href="#list_protections"><CopyableCode code="list_protections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves Protection objects for the account. You can retrieve all protections or you can provide filtering criteria and retrieve just the subset of protections that match the criteria.</td>
</tr>
<tr>
    <td><a href="#create_protection"><CopyableCode code="create_protection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Enables Shield Advanced for a specific Amazon Web Services resource. The resource can be an Amazon CloudFront distribution, Amazon Route 53 hosted zone, Global Accelerator standard accelerator, Elastic IP Address, Application Load Balancer, or a Classic Load Balancer. You can protect Amazon EC2 instances and Network Load Balancers by association with protected Amazon EC2 Elastic IP addresses. You can add protection to only a single resource with each CreateProtection request. You can add protection to multiple resources at once through the Shield Advanced console at https:​//console.aws.amazon.com/wafv2/shieldv2#/. For more information see Getting Started with Shield Advanced and Adding Shield Advanced protection to Amazon Web Services resources.</td>
</tr>
<tr>
    <td><a href="#associate_health_check"><CopyableCode code="associate_health_check" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProtectionId"><code>ProtectionId</code></a>, <a href="#parameter-HealthCheckArn"><code>HealthCheckArn</code></a></td>
    <td></td>
    <td>Adds health-based detection to the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. You define the health check in Route 53 and then associate it with your Shield Advanced protection. For more information, see Shield Advanced Health-Based Detection in the WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_protection"><CopyableCode code="delete_protection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Shield Advanced Protection.</td>
</tr>
<tr>
    <td><a href="#disassociate_health_check"><CopyableCode code="disassociate_health_check" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProtectionId"><code>ProtectionId</code></a>, <a href="#parameter-HealthCheckArn"><code>HealthCheckArn</code></a></td>
    <td></td>
    <td>Removes health-based detection from the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. You define the health check in Route 53 and then associate or disassociate it with your Shield Advanced protection. For more information, see Shield Advanced Health-Based Detection in the WAF Developer Guide.</td>
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
    defaultValue="describe_protection"
    values={[
        { label: 'describe_protection', value: 'describe_protection' },
        { label: 'list_protections', value: 'list_protections' }
    ]}
>
<TabItem value="describe_protection">

Lists the details of a Protection object.

```sql
SELECT
application_layer_automatic_response_configuration,
health_check_ids,
id,
name,
protection_arn,
resource_arn
FROM aws.shield.protections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_protections">

Retrieves Protection objects for the account. You can retrieve all protections or you can provide filtering criteria and retrieve just the subset of protections that match the criteria.

```sql
SELECT
application_layer_automatic_response_configuration,
health_check_ids,
id,
name,
protection_arn,
resource_arn
FROM aws.shield.protections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_protection"
    values={[
        { label: 'create_protection', value: 'create_protection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_protection">

Enables Shield Advanced for a specific Amazon Web Services resource. The resource can be an Amazon CloudFront distribution, Amazon Route 53 hosted zone, Global Accelerator standard accelerator, Elastic IP Address, Application Load Balancer, or a Classic Load Balancer. You can protect Amazon EC2 instances and Network Load Balancers by association with protected Amazon EC2 Elastic IP addresses. You can add protection to only a single resource with each CreateProtection request. You can add protection to multiple resources at once through the Shield Advanced console at https://console.aws.amazon.com/wafv2/shieldv2#/. For more information see Getting Started with Shield Advanced and Adding Shield Advanced protection to Amazon Web Services resources.

```sql
INSERT INTO aws.shield.protections (
Name,
ResourceArn,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ ResourceArn }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
protection_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: protections
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the protections resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        Friendly name for the Protection you are creating.
    - name: ResourceArn
      value: "{{ ResourceArn }}"
      description: |
        The ARN (Amazon Resource Name) of the resource to be protected. The ARN should be in one of the following formats: For an Application Load Balancer: arn:aws:elasticloadbalancing:region:account-id:loadbalancer/app/load-balancer-name/load-balancer-id For an Elastic Load Balancer (Classic Load Balancer): arn:aws:elasticloadbalancing:region:account-id:loadbalancer/load-balancer-name For an Amazon CloudFront distribution: arn:aws:cloudfront::account-id:distribution/distribution-id For an Global Accelerator standard accelerator: arn:aws:globalaccelerator::account-id:accelerator/accelerator-id For Amazon Route 53: arn:aws:route53:::hostedzone/hosted-zone-id For an Elastic IP address: arn:aws:ec2:region:account-id:eip-allocation/allocation-id
    - name: Tags
      description: |
        One or more tag key-value pairs for the Protection object that is created.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_health_check"
    values={[
        { label: 'associate_health_check', value: 'associate_health_check' }
    ]}
>
<TabItem value="associate_health_check">

Adds health-based detection to the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. You define the health check in Route 53 and then associate it with your Shield Advanced protection. For more information, see Shield Advanced Health-Based Detection in the WAF Developer Guide.

```sql
UPDATE aws.shield.protections
SET 
ProtectionId = '{{ ProtectionId }}',
HealthCheckArn = '{{ HealthCheckArn }}'
WHERE 
region = '{{ region }}' --required
AND ProtectionId = '{{ ProtectionId }}' --required
AND HealthCheckArn = '{{ HealthCheckArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_protection"
    values={[
        { label: 'delete_protection', value: 'delete_protection' }
    ]}
>
<TabItem value="delete_protection">

Deletes an Shield Advanced Protection.

```sql
DELETE FROM aws.shield.protections
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_health_check"
    values={[
        { label: 'disassociate_health_check', value: 'disassociate_health_check' }
    ]}
>
<TabItem value="disassociate_health_check">

Removes health-based detection from the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. You define the health check in Route 53 and then associate or disassociate it with your Shield Advanced protection. For more information, see Shield Advanced Health-Based Detection in the WAF Developer Guide.

```sql
EXEC aws.shield.protections.disassociate_health_check 
@region='{{ region }}' --required 
@@json=
'{
"ProtectionId": "{{ ProtectionId }}", 
"HealthCheckArn": "{{ HealthCheckArn }}"
}'
;
```
</TabItem>
</Tabs>
