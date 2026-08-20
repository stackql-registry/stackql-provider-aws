--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - resiliencehubv2
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehubv2.services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service"
    values={[
        { label: 'get_service', value: 'get_service' },
        { label: 'list_services', value: 'list_services' }
    ]}
>
<TabItem value="get_service">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Resource name (used in ARN — no spaces allowed). (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_\-&#93;&#123;1,59&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID that owns the service. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="achievability" /></td>
    <td><code>object</code></td>
    <td>The achievability status of the service's resilience targets.</td>
</tr>
<tr>
    <td><CopyableCode code="assessment_status" /></td>
    <td><code>string</code></td>
    <td>The current assessment status of the service. (NOT_STARTED, PENDING, IN_PROGRESS, FAILED, SUCCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="associated_systems" /></td>
    <td><code>array</code></td>
    <td>The systems associated with the service.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the service was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dependency_discovery" /></td>
    <td><code>object</code></td>
    <td>The dependency discovery configuration for the service.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Resource description for services and policies.</td>
</tr>
<tr>
    <td><CopyableCode code="effective_policy_values" /></td>
    <td><code>object</code></td>
    <td>The effective policy values for the service.</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_assessment_cost" /></td>
    <td><code>object</code></td>
    <td>The estimated cost of running an assessment on the service.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>KMS key identifier — accepts key ID, key ARN, alias name, or alias ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="open_findings_count" /></td>
    <td><code>integer</code></td>
    <td>The number of open findings for the service.</td>
</tr>
<tr>
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string</code></td>
    <td>The AWS Organizations identifier for the service. (pattern: &lt;code&gt;o-&#91;a-z0-9&#93;&#123;10,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ou_id" /></td>
    <td><code>string</code></td>
    <td>The organizational unit (OU) identifier for the service. (pattern: &lt;code&gt;ou-&#91;a-z0-9&#93;&#123;4,32&#125;-&#91;a-z0-9&#93;&#123;8,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="permission_model" /></td>
    <td><code>object</code></td>
    <td>Defines the permission model for a service.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>ARN identifier. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>The Regions where the service operates.</td>
</tr>
<tr>
    <td><CopyableCode code="report_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for automatic report generation on a Service.</td>
</tr>
<tr>
    <td><CopyableCode code="rerun_assessment" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the assessment should be rerun.</td>
</tr>
<tr>
    <td><CopyableCode code="resolved_findings_count" /></td>
    <td><code>integer</code></td>
    <td>The number of resolved findings for the service.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_discovery" /></td>
    <td><code>object</code></td>
    <td>The resource discovery status for the service.</td>
</tr>
<tr>
    <td><CopyableCode code="service_arn" /></td>
    <td><code>string</code></td>
    <td>ARN identifier. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the service was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_services">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Resource name (used in ARN — no spaces allowed). (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_\-&#93;&#123;1,59&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>Displayed only if caller has access. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="achievability" /></td>
    <td><code>object</code></td>
    <td>The achievability status of the service's resilience targets.</td>
</tr>
<tr>
    <td><CopyableCode code="assessment_status" /></td>
    <td><code>string</code></td>
    <td>The current assessment status of the service. (NOT_STARTED, PENDING, IN_PROGRESS, FAILED, SUCCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="associated_systems" /></td>
    <td><code>array</code></td>
    <td>The systems associated with the service.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the service was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dependency_discovery" /></td>
    <td><code>object</code></td>
    <td>The dependency discovery configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="open_findings_count" /></td>
    <td><code>integer</code></td>
    <td>The number of open findings.</td>
</tr>
<tr>
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string</code></td>
    <td>Displayed only if caller has access. (pattern: &lt;code&gt;o-&#91;a-z0-9&#93;&#123;10,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ou_id" /></td>
    <td><code>string</code></td>
    <td>Displayed only if caller has access. (pattern: &lt;code&gt;ou-&#91;a-z0-9&#93;&#123;4,32&#125;-&#91;a-z0-9&#93;&#123;8,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>ARN identifier. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>The Regions where the service operates.</td>
</tr>
<tr>
    <td><CopyableCode code="resolved_findings_count" /></td>
    <td><code>integer</code></td>
    <td>The number of resolved findings.</td>
</tr>
<tr>
    <td><CopyableCode code="service_arn" /></td>
    <td><code>string</code></td>
    <td>ARN identifier. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the service was last updated.</td>
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
    <td><a href="#get_service"><CopyableCode code="get_service" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a service by ARN.</td>
</tr>
<tr>
    <td><a href="#list_services"><CopyableCode code="list_services" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-systemArn"><code>systemArn</code></a>, <a href="#parameter-userJourneyId"><code>userJourneyId</code></a>, <a href="#parameter-ouId"><code>ouId</code></a>, <a href="#parameter-accountId"><code>accountId</code></a>, <a href="#parameter-assessmentStatus"><code>assessmentStatus</code></a>, <a href="#parameter-policyArn"><code>policyArn</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists services.</td>
</tr>
<tr>
    <td><a href="#create_service"><CopyableCode code="create_service" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-regions"><code>regions</code></a>, <a href="#parameter-permissionModel"><code>permissionModel</code></a></td>
    <td></td>
    <td>Creates a service.</td>
</tr>
<tr>
    <td><a href="#update_service"><CopyableCode code="update_service" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a></td>
    <td></td>
    <td>Updates an existing service.</td>
</tr>
<tr>
    <td><a href="#delete_service"><CopyableCode code="delete_service" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a service.</td>
</tr>
<tr>
    <td><a href="#start_failure_mode_assessment"><CopyableCode code="start_failure_mode_assessment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a></td>
    <td></td>
    <td>Starts a failure mode assessment.</td>
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
<tr id="parameter-serviceArn">
    <td><CopyableCode code="serviceArn" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-accountId">
    <td><CopyableCode code="accountId" /></td>
    <td><code>string</code></td>
    <td>Filter services by AWS account ID.</td>
</tr>
<tr id="parameter-assessmentStatus">
    <td><CopyableCode code="assessmentStatus" /></td>
    <td><code>string</code></td>
    <td>Filter services by assessment status.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ouId">
    <td><CopyableCode code="ouId" /></td>
    <td><code>string</code></td>
    <td>Filter services by organizational unit (OU) identifier.</td>
</tr>
<tr id="parameter-policyArn">
    <td><CopyableCode code="policyArn" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-systemArn">
    <td><CopyableCode code="systemArn" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-userJourneyId">
    <td><CopyableCode code="userJourneyId" /></td>
    <td><code>string</code></td>
    <td>Filter services by user journey identifier.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_service"
    values={[
        { label: 'get_service', value: 'get_service' },
        { label: 'list_services', value: 'list_services' }
    ]}
>
<TabItem value="get_service">

Retrieves a service by ARN.

```sql
SELECT
name,
account_id,
achievability,
assessment_status,
associated_systems,
created_at,
dependency_discovery,
description,
effective_policy_values,
estimated_assessment_cost,
kms_key_id,
open_findings_count,
organization_id,
ou_id,
permission_model,
policy_arn,
regions,
report_configuration,
rerun_assessment,
resolved_findings_count,
resource_discovery,
service_arn,
tags,
updated_at
FROM aws.resiliencehubv2.services
WHERE serviceArn = '{{ serviceArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_services">

Lists services.

```sql
SELECT
name,
account_id,
achievability,
assessment_status,
associated_systems,
created_at,
dependency_discovery,
open_findings_count,
organization_id,
ou_id,
policy_arn,
regions,
resolved_findings_count,
service_arn,
updated_at
FROM aws.resiliencehubv2.services
WHERE region = '{{ region }}' -- required
AND systemArn = '{{ systemArn }}'
AND userJourneyId = '{{ userJourneyId }}'
AND ouId = '{{ ouId }}'
AND accountId = '{{ accountId }}'
AND assessmentStatus = '{{ assessmentStatus }}'
AND policyArn = '{{ policyArn }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service"
    values={[
        { label: 'create_service', value: 'create_service' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service">

Creates a service.

```sql
INSERT INTO aws.resiliencehubv2.services (
name,
description,
associatedSystems,
policyArn,
regions,
permissionModel,
dependencyDiscovery,
reportConfiguration,
kmsKeyId,
tags,
clientToken,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ associatedSystems }}',
'{{ policyArn }}',
'{{ regions }}' /* required */,
'{{ permissionModel }}' /* required */,
'{{ dependencyDiscovery }}',
'{{ reportConfiguration }}',
'{{ kmsKeyId }}',
'{{ tags }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
service
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: services
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the services resource.
    - name: name
      value: "{{ name }}"
      description: |
        Resource name (used in ARN — no spaces allowed).
    - name: description
      value: "{{ description }}"
      description: |
        Resource description for services and policies.
    - name: associatedSystems
      value:
        - systemArn: "{{ systemArn }}"
          systemName: "{{ systemName }}"
          userJourneyIds: "{{ userJourneyIds }}"
    - name: policyArn
      value: "{{ policyArn }}"
      description: |
        ARN identifier.
    - name: regions
      value:
        - "{{ regions }}"
    - name: permissionModel
      description: |
        Defines the permission model for a service.
      value:
        invokerRoleName: "{{ invokerRoleName }}"
        crossAccountRoles:
          - crossAccountRoleArn: "{{ crossAccountRoleArn }}"
            externalId: "{{ externalId }}"
    - name: dependencyDiscovery
      value: "{{ dependencyDiscovery }}"
      description: |
        Caller-settable values for dependency discovery. INITIALIZING is system-managed.
      valid_values: ['ENABLED', 'DISABLED']
    - name: reportConfiguration
      description: |
        Configuration for automatic report generation on a Service.
      value:
        reportOutputs:
          - s3:
              bucketPath: "{{ bucketPath }}"
              bucketOwner: "{{ bucketOwner }}"
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
      description: |
        KMS key identifier — accepts key ID, key ARN, alias name, or alias ARN.
    - name: tags
      value: "{{ tags }}"
      description: |
        Resource tags.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Idempotency token.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service"
    values={[
        { label: 'update_service', value: 'update_service' }
    ]}
>
<TabItem value="update_service">

Updates an existing service.

```sql
UPDATE aws.resiliencehubv2.services
SET 
serviceArn = '{{ serviceArn }}',
description = '{{ description }}',
associatedSystems = '{{ associatedSystems }}',
policyArn = '{{ policyArn }}',
regions = '{{ regions }}',
permissionModel = '{{ permissionModel }}',
dependencyDiscovery = '{{ dependencyDiscovery }}',
reportConfiguration = '{{ reportConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND serviceArn = '{{ serviceArn }}' --required
RETURNING
service;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service"
    values={[
        { label: 'delete_service', value: 'delete_service' }
    ]}
>
<TabItem value="delete_service">

Deletes a service.

```sql
DELETE FROM aws.resiliencehubv2.services
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_failure_mode_assessment"
    values={[
        { label: 'start_failure_mode_assessment', value: 'start_failure_mode_assessment' }
    ]}
>
<TabItem value="start_failure_mode_assessment">

Starts a failure mode assessment.

```sql
EXEC aws.resiliencehubv2.services.start_failure_mode_assessment 
@region='{{ region }}' --required 
@@json=
'{
"serviceArn": "{{ serviceArn }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
