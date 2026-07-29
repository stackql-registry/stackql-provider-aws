--- 
title: findings
hide_title: false
hide_table_of_contents: false
keywords:
  - findings
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

Creates, updates, deletes, gets or lists a <code>findings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="findings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.findings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_findings"
    values={[
        { label: 'get_findings', value: 'get_findings' }
    ]}
>
<TabItem value="get_findings">

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
    <td><CopyableCode code="action" /></td>
    <td><code>object</code></td>
    <td>Provides details about an action that affects or that was taken on a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that a finding is generated in. Length Constraints: 12. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="aws_account_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Web Services account from which a finding was generated. Length Constraints: Minimum length of 1. Maximum length of 50. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="company_name" /></td>
    <td><code>string</code></td>
    <td>The name of the company for the product that generated the finding. Security Hub CSPM populates this attribute automatically for each finding. You cannot update this attribute with BatchImportFindings or BatchUpdateFindings. The exception to this is a custom integration. When you use the Security Hub CSPM console or API to filter findings by company name, you use this attribute. Length Constraints: Minimum length of 1. Maximum length of 128. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compliance" /></td>
    <td><code>object</code></td>
    <td>This data type is exclusive to findings that are generated as the result of a check run against a specific rule in a supported security standard, such as CIS Amazon Web Services Foundations. Contains security standard-related finding details.</td>
</tr>
<tr>
    <td><CopyableCode code="confidence" /></td>
    <td><code>integer</code></td>
    <td>A finding's confidence. Confidence is defined as the likelihood that a finding accurately identifies the behavior or issue that it was intended to identify. Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100 means 100 percent confidence.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>Indicates when the security findings provider created the potential security issue that a finding captured. For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see Timestamps. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="criticality" /></td>
    <td><code>integer</code></td>
    <td>The level of importance assigned to the resources associated with the finding. A score of 0 means that the underlying resources have no criticality, and a score of 100 is reserved for the most critical resources.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A finding's description. Description is a required property. Length Constraints: Minimum length of 1. Maximum length of 1024. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="detection" /></td>
    <td><code>object</code></td>
    <td>Provides details about an Amazon GuardDuty Extended Threat Detection attack sequence. GuardDuty generates an attack sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub CSPM, you must have GuardDuty enabled. For more information, see GuardDuty Extended Threat Detection in the Amazon GuardDuty User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="finding_provider_fields" /></td>
    <td><code>object</code></td>
    <td>In a BatchImportFindings request, finding providers use FindingProviderFields to provide and update their own values for confidence, criticality, related findings, severity, and types.</td>
</tr>
<tr>
    <td><CopyableCode code="first_observed_at" /></td>
    <td><code>string</code></td>
    <td>Indicates when the security findings provider first observed the potential security issue that a finding captured. For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see Timestamps. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="generator_details" /></td>
    <td><code>object</code></td>
    <td>Provides metadata for the Amazon CodeGuru detector associated with a finding. This field pertains to findings that relate to Lambda functions. Amazon Inspector identifies policy violations and vulnerabilities in Lambda function code based on internal detectors developed in collaboration with Amazon CodeGuru. Security Hub CSPM receives those findings.</td>
</tr>
<tr>
    <td><CopyableCode code="generator_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the solution-specific component (a discrete unit of logic) that generated a finding. In various security findings providers' solutions, this generator can be called a rule, a check, a detector, a plugin, or something else. Length Constraints: Minimum length of 1. Maximum length of 512. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The security findings provider-specific identifier for a finding. Length Constraints: Minimum length of 1. Maximum length of 512. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_observed_at" /></td>
    <td><code>string</code></td>
    <td>Indicates when the security findings provider most recently observed a change in the resource that is involved in the finding. For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see Timestamps. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="malware" /></td>
    <td><code>array</code></td>
    <td>A list of malware related to a finding. Array Members: Maximum number of 5 items.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>object</code></td>
    <td>The details of network-related information about a finding.</td>
</tr>
<tr>
    <td><CopyableCode code="network_path" /></td>
    <td><code>array</code></td>
    <td>Provides information about a network path that is relevant to a finding. Each entry under NetworkPath represents a component of that path.</td>
</tr>
<tr>
    <td><CopyableCode code="note" /></td>
    <td><code>object</code></td>
    <td>A user-defined note added to a finding.</td>
</tr>
<tr>
    <td><CopyableCode code="patch_summary" /></td>
    <td><code>object</code></td>
    <td>Provides an overview of the patch compliance status for an instance against a selected compliance standard.</td>
</tr>
<tr>
    <td><CopyableCode code="process" /></td>
    <td><code>object</code></td>
    <td>The details of process-related information about a finding.</td>
</tr>
<tr>
    <td><CopyableCode code="processed_at" /></td>
    <td><code>string</code></td>
    <td>A timestamp that indicates when Security Hub CSPM received a finding and begins to process it. For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see Timestamps. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="product_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN generated by Security Hub CSPM that uniquely identifies a product that generates findings. This can be the ARN for a third-party product that is integrated with Security Hub CSPM, or the ARN for a custom integration. Length Constraints: Minimum length of 12. Maximum length of 2048. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="product_fields" /></td>
    <td><code>object</code></td>
    <td>A data type where security findings providers can include additional solution-specific details that aren't part of the defined AwsSecurityFinding format. Can contain up to 50 key-value pairs. For each key-value pair, the key can contain up to 128 characters, and the value can contain up to 2048 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="product_name" /></td>
    <td><code>string</code></td>
    <td>The name of the product that generated the finding. Security Hub CSPM populates this attribute automatically for each finding. You cannot update this attribute with BatchImportFindings or BatchUpdateFindings. The exception to this is a custom integration. When you use the Security Hub CSPM console or API to filter findings by product name, you use this attribute. Length Constraints: Minimum length of 1. Maximum length of 128. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="record_state" /></td>
    <td><code>string</code></td>
    <td>The record state of a finding. (ACTIVE, ARCHIVED)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Region from which the finding was generated. Security Hub CSPM populates this attribute automatically for each finding. You cannot update it using BatchImportFindings or BatchUpdateFindings. Length Constraints: Minimum length of 1. Maximum length of 16. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="related_findings" /></td>
    <td><code>array</code></td>
    <td>A list of related findings. Array Members: Minimum number of 1 item. Maximum number of 10 items.</td>
</tr>
<tr>
    <td><CopyableCode code="remediation" /></td>
    <td><code>object</code></td>
    <td>A data type that describes the remediation options for a finding.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>A set of resource data types that describe the resources that the finding refers to. Array Members: Minimum number of 1 item. Maximum number of 32 items.</td>
</tr>
<tr>
    <td><CopyableCode code="sample" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the finding is a sample finding.</td>
</tr>
<tr>
    <td><CopyableCode code="schema_version" /></td>
    <td><code>string</code></td>
    <td>The schema version that a finding is formatted for. The value is 2018-10-08. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>object</code></td>
    <td>A finding's severity.</td>
</tr>
<tr>
    <td><CopyableCode code="source_url" /></td>
    <td><code>string</code></td>
    <td>A URL that links to a page about the current finding in the security findings provider's solution. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="threat_intel_indicators" /></td>
    <td><code>array</code></td>
    <td>Threat intelligence details related to a finding. Array Members: Minimum number of 1 item. Maximum number of 5 items.</td>
</tr>
<tr>
    <td><CopyableCode code="threats" /></td>
    <td><code>array</code></td>
    <td>Details about the threat detected in a security finding and the file paths that were affected by the threat. Array Members: Minimum number of 1 item. Maximum number of 32 items.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>A finding's title. Title is a required property. Length Constraints: Minimum length of 1. Maximum length of 256. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="types" /></td>
    <td><code>array</code></td>
    <td>One or more finding types in the format of namespace/category/classifier that classify a finding. Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual Behaviors | Sensitive Data Identifications Array Members: Maximum number of 50 items.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td>Indicates when the security findings provider last updated the finding record. For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see Timestamps. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="user_defined_fields" /></td>
    <td><code>object</code></td>
    <td>A list of name/value string pairs associated with the finding. These are custom, user-defined fields added to a finding. Can contain up to 50 key-value pairs. For each key-value pair, the key can contain up to 128 characters, and the value can contain up to 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="verification_state" /></td>
    <td><code>string</code></td>
    <td>Indicates the veracity of a finding. (UNKNOWN, TRUE_POSITIVE, FALSE_POSITIVE, BENIGN_POSITIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="vulnerabilities" /></td>
    <td><code>array</code></td>
    <td>Provides a list of vulnerabilities associated with the findings.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow" /></td>
    <td><code>object</code></td>
    <td>Provides information about the status of the investigation into a finding.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_state" /></td>
    <td><code>string</code></td>
    <td>The workflow state of a finding. (NEW, ASSIGNED, IN_PROGRESS, DEFERRED, RESOLVED)</td>
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
    <td><a href="#get_findings"><CopyableCode code="get_findings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of findings that match the specified criteria. If cross-Region aggregation is enabled, then when you call GetFindings from the home Region, the results include all of the matching findings from both the home Region and linked Regions.</td>
</tr>
<tr>
    <td><a href="#update_findings"><CopyableCode code="update_findings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Filters"><code>Filters</code></a></td>
    <td></td>
    <td>UpdateFindings is a deprecated operation. Instead of UpdateFindings, use the BatchUpdateFindings operation. The UpdateFindings operation updates the Note and RecordState of the Security Hub CSPM aggregated findings that the filter attributes specify. Any member account that can view the finding can also see the update to the finding. Finding updates made with UpdateFindings aren't persisted if the same finding is later updated by the finding provider through the BatchImportFindings operation. In addition, Security Hub CSPM doesn't record updates made with UpdateFindings in the finding history.</td>
</tr>
<tr>
    <td><a href="#batch_import_findings"><CopyableCode code="batch_import_findings" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Findings"><code>Findings</code></a></td>
    <td></td>
    <td>Imports security findings generated by a finding provider into Security Hub CSPM. This action is requested by the finding provider to import its findings into Security Hub CSPM. BatchImportFindings must be called by one of the following: The Amazon Web Services account that is associated with a finding if you are using the default product ARN or are a partner sending findings from within a customer's Amazon Web Services account. In these cases, the identifier of the account that you are calling BatchImportFindings from needs to be the same as the AwsAccountId attribute for the finding. An Amazon Web Services account that Security Hub CSPM has allow-listed for an official partner integration. In this case, you can call BatchImportFindings from the allow-listed account and send findings from different customer accounts in the same batch. The maximum allowed size for a finding is 240 Kb. An error is returned for any finding larger than 240 Kb. After a finding is created, BatchImportFindings cannot be used to update the following finding fields and objects, which Security Hub CSPM customers use to manage their investigation workflow. Note UserDefinedFields VerificationState Workflow Finding providers also should not use BatchImportFindings to update the following attributes. Confidence Criticality RelatedFindings Severity Types Instead, finding providers use FindingProviderFields to provide values for these attributes.</td>
</tr>
<tr>
    <td><a href="#batch_update_findings"><CopyableCode code="batch_update_findings" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FindingIdentifiers"><code>FindingIdentifiers</code></a></td>
    <td></td>
    <td>Used by Security Hub CSPM customers to update information about their investigation into one or more findings. Requested by administrator accounts or member accounts. Administrator accounts can update findings for their account and their member accounts. A member account can update findings only for their own account. Administrator and member accounts can use this operation to update the following fields and objects for one or more findings: Confidence Criticality Note RelatedFindings Severity Types UserDefinedFields VerificationState Workflow If you use this operation to update a finding, your updates don’t affect the value for the UpdatedAt field of the finding. Also note that it can take several minutes for Security Hub CSPM to process your request and update each finding specified in the request. You can configure IAM policies to restrict access to fields and field values. For example, you might not want member accounts to be able to suppress findings or change the finding severity. For more information see Configuring access to BatchUpdateFindings in the Security Hub CSPM User Guide.</td>
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
    defaultValue="get_findings"
    values={[
        { label: 'get_findings', value: 'get_findings' }
    ]}
>
<TabItem value="get_findings">

Returns a list of findings that match the specified criteria. If cross-Region aggregation is enabled, then when you call GetFindings from the home Region, the results include all of the matching findings from both the home Region and linked Regions.

```sql
SELECT
action,
aws_account_id,
aws_account_name,
company_name,
compliance,
confidence,
created_at,
criticality,
description,
detection,
finding_provider_fields,
first_observed_at,
generator_details,
generator_id,
id,
last_observed_at,
malware,
network,
network_path,
note,
patch_summary,
process,
processed_at,
product_arn,
product_fields,
product_name,
record_state,
region,
related_findings,
remediation,
resources,
sample,
schema_version,
severity,
source_url,
threat_intel_indicators,
threats,
title,
types,
updated_at,
user_defined_fields,
verification_state,
vulnerabilities,
workflow,
workflow_state
FROM aws.securityhub.findings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_findings"
    values={[
        { label: 'update_findings', value: 'update_findings' }
    ]}
>
<TabItem value="update_findings">

UpdateFindings is a deprecated operation. Instead of UpdateFindings, use the BatchUpdateFindings operation. The UpdateFindings operation updates the Note and RecordState of the Security Hub CSPM aggregated findings that the filter attributes specify. Any member account that can view the finding can also see the update to the finding. Finding updates made with UpdateFindings aren't persisted if the same finding is later updated by the finding provider through the BatchImportFindings operation. In addition, Security Hub CSPM doesn't record updates made with UpdateFindings in the finding history.

```sql
UPDATE aws.securityhub.findings
SET 
Filters = '{{ Filters }}',
Note = '{{ Note }}',
RecordState = '{{ RecordState }}'
WHERE 
region = '{{ region }}' --required
AND Filters = '{{ Filters }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_import_findings"
    values={[
        { label: 'batch_import_findings', value: 'batch_import_findings' },
        { label: 'batch_update_findings', value: 'batch_update_findings' }
    ]}
>
<TabItem value="batch_import_findings">

Imports security findings generated by a finding provider into Security Hub CSPM. This action is requested by the finding provider to import its findings into Security Hub CSPM. BatchImportFindings must be called by one of the following: The Amazon Web Services account that is associated with a finding if you are using the default product ARN or are a partner sending findings from within a customer's Amazon Web Services account. In these cases, the identifier of the account that you are calling BatchImportFindings from needs to be the same as the AwsAccountId attribute for the finding. An Amazon Web Services account that Security Hub CSPM has allow-listed for an official partner integration. In this case, you can call BatchImportFindings from the allow-listed account and send findings from different customer accounts in the same batch. The maximum allowed size for a finding is 240 Kb. An error is returned for any finding larger than 240 Kb. After a finding is created, BatchImportFindings cannot be used to update the following finding fields and objects, which Security Hub CSPM customers use to manage their investigation workflow. Note UserDefinedFields VerificationState Workflow Finding providers also should not use BatchImportFindings to update the following attributes. Confidence Criticality RelatedFindings Severity Types Instead, finding providers use FindingProviderFields to provide values for these attributes.

```sql
EXEC aws.securityhub.findings.batch_import_findings 
@region='{{ region }}' --required 
@@json=
'{
"Findings": "{{ Findings }}"
}'
;
```
</TabItem>
<TabItem value="batch_update_findings">

Used by Security Hub CSPM customers to update information about their investigation into one or more findings. Requested by administrator accounts or member accounts. Administrator accounts can update findings for their account and their member accounts. A member account can update findings only for their own account. Administrator and member accounts can use this operation to update the following fields and objects for one or more findings: Confidence Criticality Note RelatedFindings Severity Types UserDefinedFields VerificationState Workflow If you use this operation to update a finding, your updates don’t affect the value for the UpdatedAt field of the finding. Also note that it can take several minutes for Security Hub CSPM to process your request and update each finding specified in the request. You can configure IAM policies to restrict access to fields and field values. For example, you might not want member accounts to be able to suppress findings or change the finding severity. For more information see Configuring access to BatchUpdateFindings in the Security Hub CSPM User Guide.

```sql
EXEC aws.securityhub.findings.batch_update_findings 
@region='{{ region }}' --required 
@@json=
'{
"FindingIdentifiers": "{{ FindingIdentifiers }}", 
"Note": "{{ Note }}", 
"Severity": "{{ Severity }}", 
"VerificationState": "{{ VerificationState }}", 
"Confidence": {{ Confidence }}, 
"Criticality": {{ Criticality }}, 
"Types": "{{ Types }}", 
"UserDefinedFields": "{{ UserDefinedFields }}", 
"Workflow": "{{ Workflow }}", 
"RelatedFindings": "{{ RelatedFindings }}"
}'
;
```
</TabItem>
</Tabs>
