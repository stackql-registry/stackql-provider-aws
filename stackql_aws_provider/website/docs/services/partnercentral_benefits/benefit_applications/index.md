--- 
title: benefit_applications
hide_title: false
hide_table_of_contents: false
keywords:
  - benefit_applications
  - partnercentral_benefits
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

Creates, updates, deletes, gets or lists a <code>benefit_applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="benefit_applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_benefits.benefit_applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_benefit_application"
    values={[
        { label: 'get_benefit_application', value: 'get_benefit_application' },
        { label: 'list_benefit_applications', value: 'list_benefit_applications' }
    ]}
>
<TabItem value="get_benefit_application">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the benefit application. (pattern: &lt;code&gt;arn:aws:(&#91;a-zA-Z0-9\-&#93;)+:(&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-\d&#123;1&#125;)?:(\d&#123;12&#125;)?:(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="associated_resources" /></td>
    <td><code>array</code></td>
    <td>AWS resources that are associated with this benefit application.</td>
</tr>
<tr>
    <td><CopyableCode code="benefit_application_details" /></td>
    <td><code>object</code></td>
    <td>Detailed information and requirements specific to the benefit being requested.</td>
</tr>
<tr>
    <td><CopyableCode code="benefit_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the benefit being requested in this application. (pattern: &lt;code&gt;(arn:.+|ben-&#91;0-9a-z&#93;&#123;14&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog identifier that the benefit application belongs to. (pattern: &lt;code&gt;&#91;A-Za-z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the benefit application was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A detailed description of the benefit application.</td>
</tr>
<tr>
    <td><CopyableCode code="file_details" /></td>
    <td><code>array</code></td>
    <td>Supporting documents and files attached to the benefit application.</td>
</tr>
<tr>
    <td><CopyableCode code="fulfillment_types" /></td>
    <td><code>array</code></td>
    <td>The fulfillment types requested for this benefit application.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the benefit application. (pattern: &lt;code&gt;benappl-&#91;0-9a-z&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the benefit application.</td>
</tr>
<tr>
    <td><CopyableCode code="partner_contacts" /></td>
    <td><code>array</code></td>
    <td>Contact information for partner representatives responsible for this benefit application.</td>
</tr>
<tr>
    <td><CopyableCode code="programs" /></td>
    <td><code>array</code></td>
    <td>The AWS partner programs associated with this benefit application.</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>The current revision number of the benefit application.</td>
</tr>
<tr>
    <td><CopyableCode code="stage" /></td>
    <td><code>string</code></td>
    <td>The current stage in the benefit application processing workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current processing status of the benefit application. (PENDING_SUBMISSION, IN_REVIEW, ACTION_REQUIRED, APPROVED, REJECTED, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information explaining the current status of the benefit application.</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason_code" /></td>
    <td><code>string</code></td>
    <td>A standardized code representing the reason for the current status.</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason_codes" /></td>
    <td><code>array</code></td>
    <td>The list of standardized codes representing the reason for the current status.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the benefit application was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_benefit_applications">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the benefit application.</td>
</tr>
<tr>
    <td><CopyableCode code="associated_resources" /></td>
    <td><code>array</code></td>
    <td>AWS resources that are associated with this benefit application.</td>
</tr>
<tr>
    <td><CopyableCode code="benefit_application_details" /></td>
    <td><code>object</code></td>
    <td>Additional attributes and metadata associated with the benefit application.</td>
</tr>
<tr>
    <td><CopyableCode code="benefit_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the benefit being requested in this application. (pattern: &lt;code&gt;(arn:.+|ben-&#91;0-9a-z&#93;&#123;14&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog identifier that the benefit application belongs to. (pattern: &lt;code&gt;&#91;A-Za-z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the benefit application was created.</td>
</tr>
<tr>
    <td><CopyableCode code="fulfillment_types" /></td>
    <td><code>array</code></td>
    <td>The fulfillment types requested for this benefit application.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the benefit application. (pattern: &lt;code&gt;benappl-&#91;0-9a-z&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the benefit application.</td>
</tr>
<tr>
    <td><CopyableCode code="programs" /></td>
    <td><code>array</code></td>
    <td>The AWS partner programs associated with this benefit application.</td>
</tr>
<tr>
    <td><CopyableCode code="stage" /></td>
    <td><code>string</code></td>
    <td>The current stage in the benefit application processing workflow..</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current processing status of the benefit application. (PENDING_SUBMISSION, IN_REVIEW, ACTION_REQUIRED, APPROVED, REJECTED, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the benefit application was last updated.</td>
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
    <td><a href="#get_benefit_application"><CopyableCode code="get_benefit_application" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific benefit application.</td>
</tr>
<tr>
    <td><a href="#list_benefit_applications"><CopyableCode code="list_benefit_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a paginated list of benefit applications based on specified filter criteria.</td>
</tr>
<tr>
    <td><a href="#create_benefit_application"><CopyableCode code="create_benefit_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-BenefitIdentifier"><code>BenefitIdentifier</code></a></td>
    <td></td>
    <td>Creates a new benefit application for a partner to request access to AWS benefits and programs.</td>
</tr>
<tr>
    <td><a href="#associate_benefit_application_resource"><CopyableCode code="associate_benefit_application_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BenefitApplicationIdentifier"><code>BenefitApplicationIdentifier</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Links an AWS resource to an existing benefit application for tracking and management purposes.</td>
</tr>
<tr>
    <td><a href="#update_benefit_application"><CopyableCode code="update_benefit_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-Identifier"><code>Identifier</code></a></td>
    <td></td>
    <td>Updates an existing benefit application with new information while maintaining revision control.</td>
</tr>
<tr>
    <td><a href="#disassociate_benefit_application_resource"><CopyableCode code="disassociate_benefit_application_resource" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BenefitApplicationIdentifier"><code>BenefitApplicationIdentifier</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Removes the association between an AWS resource and a benefit application.</td>
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
    defaultValue="get_benefit_application"
    values={[
        { label: 'get_benefit_application', value: 'get_benefit_application' },
        { label: 'list_benefit_applications', value: 'list_benefit_applications' }
    ]}
>
<TabItem value="get_benefit_application">

Retrieves detailed information about a specific benefit application.

```sql
SELECT
arn,
associated_resources,
benefit_application_details,
benefit_id,
catalog,
created_at,
description,
file_details,
fulfillment_types,
id,
name,
partner_contacts,
programs,
revision,
stage,
status,
status_reason,
status_reason_code,
status_reason_codes,
updated_at
FROM aws.partnercentral_benefits.benefit_applications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_benefit_applications">

Retrieves a paginated list of benefit applications based on specified filter criteria.

```sql
SELECT
arn,
associated_resources,
benefit_application_details,
benefit_id,
catalog,
created_at,
fulfillment_types,
id,
name,
programs,
stage,
status,
updated_at
FROM aws.partnercentral_benefits.benefit_applications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_benefit_application"
    values={[
        { label: 'create_benefit_application', value: 'create_benefit_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_benefit_application">

Creates a new benefit application for a partner to request access to AWS benefits and programs.

```sql
INSERT INTO aws.partnercentral_benefits.benefit_applications (
Catalog,
ClientToken,
Name,
Description,
BenefitIdentifier,
FulfillmentTypes,
BenefitApplicationDetails,
Tags,
AssociatedResources,
PartnerContacts,
FileDetails,
region
)
SELECT 
'{{ Catalog }}',
'{{ ClientToken }}' /* required */,
'{{ Name }}',
'{{ Description }}',
'{{ BenefitIdentifier }}' /* required */,
'{{ FulfillmentTypes }}',
'{{ BenefitApplicationDetails }}',
'{{ Tags }}',
'{{ AssociatedResources }}',
'{{ PartnerContacts }}',
'{{ FileDetails }}',
'{{ region }}'
RETURNING
arn,
id,
revision
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: benefit_applications
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the benefit_applications resource.
    - name: Catalog
      value: "{{ Catalog }}"
      description: |
        The catalog identifier that specifies which benefit catalog to create the application in.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique, case-sensitive identifier to ensure idempotent processing of the creation request.
    - name: Name
      value: "{{ Name }}"
      description: |
        A human-readable name for the benefit application.
    - name: Description
      value: "{{ Description }}"
      description: |
        A detailed description of the benefit application and its intended use.
    - name: BenefitIdentifier
      value: "{{ BenefitIdentifier }}"
      description: |
        The unique identifier of the benefit being requested in this application.
    - name: FulfillmentTypes
      value:
        - "{{ FulfillmentTypes }}"
      description: |
        The types of fulfillment requested for this benefit application (e.g., credits, access, disbursement).
    - name: BenefitApplicationDetails
      value: "{{ BenefitApplicationDetails }}"
      description: |
        Detailed information and requirements specific to the benefit being requested.
    - name: Tags
      description: |
        Key-value pairs to categorize and organize the benefit application.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: AssociatedResources
      value:
        - "{{ AssociatedResources }}"
      description: |
        AWS resources that are associated with this benefit application.
    - name: PartnerContacts
      description: |
        Contact information for partner representatives responsible for this benefit application.
      value:
        - Email: "{{ Email }}"
          FirstName: "{{ FirstName }}"
          LastName: "{{ LastName }}"
          BusinessTitle: "{{ BusinessTitle }}"
          Phone: "{{ Phone }}"
    - name: FileDetails
      description: |
        Supporting documents and files attached to the benefit application.
      value:
        - FileURI: "{{ FileURI }}"
          BusinessUseCase: "{{ BusinessUseCase }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_benefit_application_resource"
    values={[
        { label: 'associate_benefit_application_resource', value: 'associate_benefit_application_resource' },
        { label: 'update_benefit_application', value: 'update_benefit_application' }
    ]}
>
<TabItem value="associate_benefit_application_resource">

Links an AWS resource to an existing benefit application for tracking and management purposes.

```sql
UPDATE aws.partnercentral_benefits.benefit_applications
SET 
Catalog = '{{ Catalog }}',
BenefitApplicationIdentifier = '{{ BenefitApplicationIdentifier }}',
ResourceArn = '{{ ResourceArn }}'
WHERE 
region = '{{ region }}' --required
AND BenefitApplicationIdentifier = '{{ BenefitApplicationIdentifier }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required
RETURNING
arn,
id,
revision;
```
</TabItem>
<TabItem value="update_benefit_application">

Updates an existing benefit application with new information while maintaining revision control.

```sql
UPDATE aws.partnercentral_benefits.benefit_applications
SET 
Catalog = '{{ Catalog }}',
ClientToken = '{{ ClientToken }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
Identifier = '{{ Identifier }}',
Revision = '{{ Revision }}',
BenefitApplicationDetails = '{{ BenefitApplicationDetails }}',
PartnerContacts = '{{ PartnerContacts }}',
FileDetails = '{{ FileDetails }}'
WHERE 
region = '{{ region }}' --required
AND ClientToken = '{{ ClientToken }}' --required
AND Identifier = '{{ Identifier }}' --required
RETURNING
arn,
id,
revision;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_benefit_application_resource"
    values={[
        { label: 'disassociate_benefit_application_resource', value: 'disassociate_benefit_application_resource' }
    ]}
>
<TabItem value="disassociate_benefit_application_resource">

Removes the association between an AWS resource and a benefit application.

```sql
EXEC aws.partnercentral_benefits.benefit_applications.disassociate_benefit_application_resource 
@region='{{ region }}' --required 
@@json=
'{
"Catalog": "{{ Catalog }}", 
"BenefitApplicationIdentifier": "{{ BenefitApplicationIdentifier }}", 
"ResourceArn": "{{ ResourceArn }}"
}'
;
```
</TabItem>
</Tabs>
