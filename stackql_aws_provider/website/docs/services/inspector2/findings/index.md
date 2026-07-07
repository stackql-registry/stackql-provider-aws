--- 
title: findings
hide_title: false
hide_table_of_contents: false
keywords:
  - findings
  - inspector2
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.findings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_findings"
    values={[
        { label: 'list_findings', value: 'list_findings' }
    ]}
>
<TabItem value="list_findings">

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
    <td><CopyableCode code="awsAccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID associated with the finding. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="codeVulnerabilityDetails" /></td>
    <td><code>object</code></td>
    <td>Details about the code vulnerability identified in a Lambda function used to filter findings.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="epss" /></td>
    <td><code>object</code></td>
    <td>The finding's EPSS score.</td>
</tr>
<tr>
    <td><CopyableCode code="exploitAvailable" /></td>
    <td><code>string</code></td>
    <td>If a finding discovered in your environment has an exploit available. (YES, NO)</td>
</tr>
<tr>
    <td><CopyableCode code="exploitabilityDetails" /></td>
    <td><code>object</code></td>
    <td>The details of an exploit available for a finding discovered in your environment.</td>
</tr>
<tr>
    <td><CopyableCode code="findingArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the finding. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:inspector2:&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:finding/&#91;a-f0-9&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="firstObservedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the finding was first observed.</td>
</tr>
<tr>
    <td><CopyableCode code="fixAvailable" /></td>
    <td><code>string</code></td>
    <td>Details on whether a fix is available through a version update. This value can be YES, NO, or PARTIAL. A PARTIAL fix means that some, but not all, of the packages identified in the finding have fixes available through updated versions. (YES, NO, PARTIAL)</td>
</tr>
<tr>
    <td><CopyableCode code="inspectorScore" /></td>
    <td><code>number (double)</code></td>
    <td>The Amazon Inspector score given to the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="inspectorScoreDetails" /></td>
    <td><code>object</code></td>
    <td>An object that contains details of the Amazon Inspector score.</td>
</tr>
<tr>
    <td><CopyableCode code="lastObservedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the finding was last observed. This timestamp for this field remains unchanged until a finding is updated.</td>
</tr>
<tr>
    <td><CopyableCode code="networkReachabilityDetails" /></td>
    <td><code>object</code></td>
    <td>An object that contains the details of a network reachability finding.</td>
</tr>
<tr>
    <td><CopyableCode code="packageVulnerabilityDetails" /></td>
    <td><code>object</code></td>
    <td>An object that contains the details of a package vulnerability finding.</td>
</tr>
<tr>
    <td><CopyableCode code="remediation" /></td>
    <td><code>object</code></td>
    <td>An object that contains the details about how to remediate a finding.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>Contains information on the resources involved in a finding. The resource value determines the valid values for type in your request. For more information, see Finding types in the Amazon Inspector user guide.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The severity of the finding. UNTRIAGED applies to PACKAGE_VULNERABILITY type findings that the vendor has not assigned a severity yet. For more information, see Severity levels for findings in the Amazon Inspector user guide. (INFORMATIONAL, LOW, MEDIUM, HIGH, CRITICAL, UNTRIAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the finding. (ACTIVE, SUPPRESSED, CLOSED)</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the finding. The type value determines the valid values for resource in your request. For more information, see Finding types in the Amazon Inspector user guide. (NETWORK_REACHABILITY, PACKAGE_VULNERABILITY, CODE_VULNERABILITY)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the finding was last updated at.</td>
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
    <td><a href="#list_findings"><CopyableCode code="list_findings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists findings for your environment.</td>
</tr>
<tr>
    <td><a href="#create_findings_report"><CopyableCode code="create_findings_report" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-reportFormat"><code>reportFormat</code></a>, <a href="#parameter-s3Destination"><code>s3Destination</code></a></td>
    <td></td>
    <td>Creates a finding report. By default only ACTIVE findings are returned in the report. To see SUPRESSED or CLOSED findings you must specify a value for the findingStatus filter criteria.</td>
</tr>
<tr>
    <td><a href="#cancel_findings_report"><CopyableCode code="cancel_findings_report" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-reportId"><code>reportId</code></a></td>
    <td></td>
    <td>Cancels the given findings report.</td>
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
    defaultValue="list_findings"
    values={[
        { label: 'list_findings', value: 'list_findings' }
    ]}
>
<TabItem value="list_findings">

Lists findings for your environment.

```sql
SELECT
awsAccountId,
codeVulnerabilityDetails,
description,
epss,
exploitAvailable,
exploitabilityDetails,
findingArn,
firstObservedAt,
fixAvailable,
inspectorScore,
inspectorScoreDetails,
lastObservedAt,
networkReachabilityDetails,
packageVulnerabilityDetails,
remediation,
resources,
severity,
status,
title_,
type_,
updatedAt
FROM aws.inspector2.findings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_findings_report"
    values={[
        { label: 'create_findings_report', value: 'create_findings_report' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_findings_report">

Creates a finding report. By default only ACTIVE findings are returned in the report. To see SUPRESSED or CLOSED findings you must specify a value for the findingStatus filter criteria.

```sql
INSERT INTO aws.inspector2.findings (
filterCriteria,
reportFormat,
s3Destination,
region
)
SELECT 
'{{ filterCriteria }}',
'{{ reportFormat }}' /* required */,
'{{ s3Destination }}' /* required */,
'{{ region }}'
RETURNING
reportId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: findings
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the findings resource.
    - name: filterCriteria
      description: |
        Details on the criteria used to define the filter.
      value:
        findingArn:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        awsAccountId:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        findingType:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        severity:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        firstObservedAt:
          - startInclusive: "{{ startInclusive }}"
            endInclusive: "{{ endInclusive }}"
        lastObservedAt:
          - startInclusive: "{{ startInclusive }}"
            endInclusive: "{{ endInclusive }}"
        updatedAt:
          - startInclusive: "{{ startInclusive }}"
            endInclusive: "{{ endInclusive }}"
        findingStatus:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        title_:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        inspectorScore:
          - upperInclusive: {{ upperInclusive }}
            lowerInclusive: {{ lowerInclusive }}
        resourceType:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        resourceId:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        resourceTags:
          - comparison: "{{ comparison }}"
            key: "{{ key }}"
            value: "{{ value }}"
        ec2InstanceImageId:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        ec2InstanceVpcId:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        ec2InstanceSubnetId:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        ecrImagePushedAt:
          - startInclusive: "{{ startInclusive }}"
            endInclusive: "{{ endInclusive }}"
        ecrImageArchitecture:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        ecrImageRegistry:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        ecrImageRepositoryName:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        ecrImageTags:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        ecrImageHash:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        ecrImageLastInUseAt:
          - startInclusive: "{{ startInclusive }}"
            endInclusive: "{{ endInclusive }}"
        ecrImageInUseCount:
          - upperInclusive: {{ upperInclusive }}
            lowerInclusive: {{ lowerInclusive }}
        portRange:
          - beginInclusive: {{ beginInclusive }}
            endInclusive: {{ endInclusive }}
        networkProtocol:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        componentId:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        componentType:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        vulnerabilityId:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        vulnerabilitySource:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        vendorSeverity:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        vulnerablePackages:
          - name:
              comparison: "{{ comparison }}"
              value: "{{ value }}"
            version:
              comparison: "{{ comparison }}"
              value: "{{ value }}"
            epoch:
              upperInclusive: {{ upperInclusive }}
              lowerInclusive: {{ lowerInclusive }}
            release:
              comparison: "{{ comparison }}"
              value: "{{ value }}"
            architecture:
              comparison: "{{ comparison }}"
              value: "{{ value }}"
            sourceLayerHash:
              comparison: "{{ comparison }}"
              value: "{{ value }}"
            sourceLambdaLayerArn:
              comparison: "{{ comparison }}"
              value: "{{ value }}"
            filePath:
              comparison: "{{ comparison }}"
              value: "{{ value }}"
        relatedVulnerabilities:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        fixAvailable:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        lambdaFunctionName:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        lambdaFunctionLayers:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        lambdaFunctionRuntime:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        lambdaFunctionLastModifiedAt:
          - startInclusive: "{{ startInclusive }}"
            endInclusive: "{{ endInclusive }}"
        lambdaFunctionExecutionRoleArn:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        exploitAvailable:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        codeVulnerabilityDetectorName:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        codeVulnerabilityDetectorTags:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        codeVulnerabilityFilePath:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        epssScore:
          - upperInclusive: {{ upperInclusive }}
            lowerInclusive: {{ lowerInclusive }}
        codeRepositoryProjectName:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
        codeRepositoryProviderType:
          - comparison: "{{ comparison }}"
            value: "{{ value }}"
    - name: reportFormat
      value: "{{ reportFormat }}"
      valid_values: ['CSV', 'JSON']
    - name: s3Destination
      description: |
        Contains details of the Amazon S3 bucket and KMS key used to export findings.
      value:
        bucketName: "{{ bucketName }}"
        keyPrefix: "{{ keyPrefix }}"
        kmsKeyArn: "{{ kmsKeyArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_findings_report"
    values={[
        { label: 'cancel_findings_report', value: 'cancel_findings_report' }
    ]}
>
<TabItem value="cancel_findings_report">

Cancels the given findings report.

```sql
EXEC aws.inspector2.findings.cancel_findings_report 
@region='{{ region }}' --required 
@@json=
'{
"reportId": "{{ reportId }}"
}'
;
```
</TabItem>
</Tabs>
